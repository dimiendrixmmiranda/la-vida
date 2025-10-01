'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Usando o useRouter corretamente
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; // Importando funções de autenticação
import Cookies from 'js-cookie';
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase/firebase";
import { Usuario } from "@/lib/interfaces/Usuario";

interface AuthContextProps {
    usuario?: Usuario | null;
    children?: React.ReactNode;
    carregando?: boolean
    login?: (email: string, senha: string) => Promise<void>;
    logout?: (encaminhamento: string) => Promise<void>;
    cadastrar?: (email: string, senha: string, nome: string, sexo: string, telefone: string, data: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

// async function usuarioNormalizado(usuarioFirebase: User): Promise<Usuario> {
//     const token = await usuarioFirebase.getIdToken();
//     const userDoc = await getDoc(doc(db, "usuarios", usuarioFirebase.uid));

//     const data = userDoc.exists() ? userDoc.data() : {};

//     return {
//         uid: usuarioFirebase.uid,
//         provedor: usuarioFirebase.providerData[0]?.providerId || "",
//         token,
//         nome: data.nome || usuarioFirebase.displayName || "",
//         email: data.email || usuarioFirebase.email || "",
//         sexo: data.sexo || "",
//         imagemURL: data.imagemURL || usuarioFirebase.photoURL || "",
//         dataNascimento: data.data || null || '',
//         telefone: data.telefone || null || '',
//         enderecoPrincipalId: data.enderecoPrincipalId || null,
//         preferencias: data.preferencias || null,
//     }
// }

export function AuthProvider({ children }: AuthContextProps) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const router = useRouter()

    async function configurarSessao(usuarioFirebase: User | null) {
        if (usuarioFirebase && usuarioFirebase.email) {
            const usuarioRef = doc(db, "usuarios", usuarioFirebase.uid);

            // 🔥 Escuta em tempo real o documento do usuário
            onSnapshot(usuarioRef, async (snapshot) => {
                if (snapshot.exists()) {
                    const dados = snapshot.data();
                    const token = await usuarioFirebase.getIdToken();

                    setUsuario({
                        uid: usuarioFirebase.uid,
                        provedor: usuarioFirebase.providerData[0]?.providerId || "",
                        token,
                        nome: dados.nome || usuarioFirebase.displayName || "",
                        email: dados.email || usuarioFirebase.email || "",
                        sexo: dados.sexo || "",
                        imagemURL: dados.imagemURL || usuarioFirebase.photoURL || "",
                        dataNascimento: dados.data || null || '',
                        telefone: dados.telefone || null || '',
                        enderecoPrincipalId: dados.enderecoPrincipalId || null,
                        preferencias: dados.preferencias || null,
                    });
                }
            });

            gerenciarCookie(true);
            setCarregando(false);
            return usuarioFirebase.email;
        } else {
            gerenciarCookie(false);
            setUsuario(null);
            setCarregando(false);
            return false;
        }
    }

    async function logout(encaminhamento: string) {
        try {
            setCarregando(true)
            await auth.signOut()
            await configurarSessao(null)
            router.push(`${encaminhamento}`)
        } finally {
            setCarregando(false)
        }
    }

    async function login(email: string, senha: string) {
        try {
            setCarregando(true);
            const result = await signInWithEmailAndPassword(auth, email, senha);
            const user = result.user;

            await configurarSessao(user)
            router.push('/usuario')
        } catch (error) {
            console.error("Erro ao autenticar:", error);
            throw error;
        } finally {
            setCarregando(false);
        }
    }

    function gerenciarCookie(logado: boolean) {
        if (logado) {
            Cookies.set('admin-auth', JSON.stringify(logado), {
                expires: 7
            })
        } else {
            Cookies.remove('admin-auth')
        }
    }


    async function cadastrar(email: string, senha: string, nome: string, sexo: string, telefone: string, data: string) {
        try {
            setCarregando(true)
            const result = await createUserWithEmailAndPassword(auth, email, senha)
            const user = result.user

            await updateProfile(user, { displayName: nome })

            await setDoc(doc(db, "usuarios", user.uid), {
                nome,
                email,
                sexo,
                telefone,
                data,
                enderecoPrincipalId: null,
                preferencias: null,
                imagemURL: "/default/usuario-padrao.png",
                tipo: "usuario",
            })

            await configurarSessao(user)
            router.push('/usuario')
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
            throw error
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        // Verificando se o cookie contém informações de autenticação
        const usuarioAuth = Cookies.get('admin-auth');
        if (usuarioAuth) {
            // Aqui você poderia adicionar a lógica para recuperar o token do Firebase
            auth.onIdTokenChanged((user) => {
                if (user) {
                    configurarSessao(user);
                } else {
                    setCarregando(false);
                }
            });
        } else {
            setCarregando(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            usuario, carregando, logout, login, cadastrar
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
