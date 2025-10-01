"use client"
import useAuth from "@/data/hooks/useAuth";
import { limparVariosInputs } from "@/lib/utils/LinparInput";
import Image from "next/image";
import { useState } from "react";

export default function Formulario() {
    const [active, setActive] = useState<"login" | "cadastro">("login");

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    const [erro, setErro] = useState<string | null>(null)
    const [sexo, setSexo] = useState('')
    const [data, setData] = useState('')
    const { cadastrar, login } = useAuth()
    
    function exibirErro(msg: string, tempoEmSegundos: number = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }   

    async function submeterCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!nome || !email) {
            exibirErro("Preencha todos os campos!")
            return
        }
        if (senha !== confirmacaoSenha) {
            exibirErro("As senhas não coincidem!")
            return
        }
        if (!cadastrar) {
            exibirErro("Cadastro não disponível")
            return
        }
        try {
            await cadastrar(email, senha, nome, sexo, telefone, data)
            limparVariosInputs([setNome, setEmail, setSenha, setConfirmacaoSenha])
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
            exibirErro("Ocorreu um erro ao cadastrar. Verifique os dados.")
        }
    }

    async function submeterLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!email || !senha) {
            exibirErro("Preencha todos os campos!")
            return
        }
        if (!login) {
            exibirErro("Login não disponível")
            return
        }
        try {
            await login(email, senha)
            limparVariosInputs([setEmail, setSenha])
        } catch (error) {
            console.error("Erro no login:", error)
            exibirErro("Falha no login. Verifique as credenciais.")
        }
    }
    console.log(erro)
    return (
        <section className="p-4 max-w-[700px] mx-auto overflow-hidden lg:max-w-[1200px]" >
            <div className="flex flex-col gap-2 w-full h-[940px] bg-zinc-900 text-white p-4 relative overflow-hidden sm:h-[940px] md:h-[1050px] md:p-8 lg:h-[600px] lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8" style={{ borderRadius: '16px', boxShadow: '0 0 4px 2px black' }}>
                <div className="flex flex-col w-full h-full z-10 lg:p-8">
                    <div className={`${active === 'cadastro' ? 'hidden' : 'flex'} flex-col gap-4 my-auto md:gap-6`}>
                        <div className="relative w-[150px] h-[150px] hidden mx-auto lg:block">
                            <Image alt="Logo" src={'/logo-la-vida.png'} fill className="object-contain" />
                        </div>
                        <h2 className="uppercase font-secundaria text-3xl font-bold text-center md:text-5xl" style={{ textShadow: '1px 1px 3px black' }}>Fazer Login</h2>
                        <form className="flex flex-col gap-2 md:gap-4" onSubmit={(e) => submeterLogin(e)}>
                            <input type="text" placeholder="E-mail..." className="p-2 h-[35px] overflow-hidden text-black" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="password" placeholder="Senha..." className="p-2 h-[35px] overflow-hidden text-black" value={senha} onChange={(e) => setSenha(e.target.value)}style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <button
                                className="px-8 py-2 rounded-md bg-zinc-900 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-zinc-900"
                                type="submit"
                            >
                                Entrar
                            </button>
                        </form>
                    </div>
                    <div className={`${active === 'cadastro' ? 'flex' : 'hidden'} flex-col gap-4 my-auto md:gap-6`}>
                        <h2 className="uppercase font-secundaria text-3xl font-bold text-center md:text-5xl" style={{ textShadow: '1px 1px 3px black' }}>Já tem uma conta?</h2>
                        <p className="text-lg leading-6 text-center md:text-xl">Acesse sua conta com segurança e continue aproveitando todas as funcionalidades já disponíveis para você. Entre agora e tenha seus dados e preferências salvos de forma prática e rápida.</p>
                        <button
                            className="px-8 py-2 rounded-md bg-azul-medio-fraco text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-azul-medio-fraco"
                            onClick={() => setActive("login")}
                        >
                            Faça Login
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full z-10 lg:p-8">
                    <div className={`${active === 'cadastro' ? 'flex' : 'hidden'} flex-col gap-4 my-auto md:gap-6`}>
                        <h2 className="uppercase font-secundaria text-3xl font-bold text-center md:text-5xl" style={{ textShadow: '1px 1px 3px black' }}>Cadastro</h2>
                        <form className="flex flex-col gap-2 md:gap-4" onSubmit={(e) => submeterCadastro(e)}>
                            <input type="text" placeholder="Nome..." className="p-2 h-[35px] overflow-hidden text-black" value={nome} onChange={(e) => setNome(e.target.value)} style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="text" placeholder="E-mail..." className="p-2 h-[35px] overflow-hidden text-black" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="password" placeholder="Senha..." className="p-2 h-[35px] overflow-hidden text-black" value={senha} onChange={(e) => setSenha(e.target.value)} style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="password" placeholder="Confirme sua senha..." className="p-2 h-[35px] overflow-hidden text-black" value={confirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)} style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="text" placeholder="Telefone..." className="p-2 h-[35px] overflow-hidden text-black" value={telefone} onChange={(e) => setTelefone(e.target.value)} style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="date" placeholder="Data de Nascimento..." className="p-2 h-[35px] overflow-hidden text-black" value={data} onChange={(e) => setData(e.target.value)} style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <div className="flex gap-4" style={{ textShadow: "1px 1px 2px black" }}>
                                <label>Informe o sexo:</label>

                                <div className="flex gap-1 items-center">
                                    <input
                                        type="radio"
                                        name="sexo"
                                        id="masculino"
                                        value="masculino"
                                        checked={sexo === "masculino"}
                                        onChange={(e) => setSexo(e.target.value)}
                                    />
                                    <label htmlFor="masculino">Masculino</label>
                                </div>

                                <div className="flex gap-1 items-center">
                                    <input
                                        type="radio"
                                        name="sexo"
                                        id="feminino"
                                        value="feminino"
                                        checked={sexo === "feminino"}
                                        onChange={(e) => setSexo(e.target.value)}
                                    />
                                    <label htmlFor="feminino">Feminino</label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-2 rounded-md bg-zinc-900 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-zinc-900"
                            >
                                Cadastrar
                            </button>
                        </form>
                    </div>
                    <div className={`${active === 'cadastro' ? 'hidden' : 'flex'} flex-col gap-4 my-auto md:gap-6`}>
                        <h2 className="uppercase font-secundaria text-3xl font-bold text-center md:text-5xl" style={{ textShadow: '1px 1px 3px black' }}>Não tem uma conta?</h2>
                        <p className="text-lg leading-6 text-center md:text-xl">Crie sua conta de forma rápida e gratuita para aproveitar todos os recursos disponíveis. Com o cadastro, você poderá acessar novidades, salvar suas preferências e ter uma experiência personalizada sempre que entrar na plataforma.</p>
                        <button
                            className="px-8 py-2 rounded-md bg-azul-medio-fraco text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-azul-medio-fraco"
                            onClick={() => setActive("cadastro")}
                        >
                            Cadastre-se
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col gap-2 w-full h-full bg-[url('/bg.png')] bg-cover bg-center absolute top-[-50%] transition-all duration-500 left-0 ${active === 'login' ? 'top-[-50%] left-0 lg:top-0 lg:left-[-50%]' : 'top-[50%] left-0 lg:top-0 lg:left-[50%]'}`}></div>
            </div>
        </section>
    );
}