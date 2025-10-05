"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/data/hooks/useAuth";

interface Props {
    children: React.ReactNode
    permitido: "administrador" | "usuario"
}

export default function RotaProtegida({ children, permitido }: Props) {
    const { usuario, carregando } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!carregando) {
            if (!usuario) {
                router.replace("/login");
            } else if (usuario.tipo !== permitido) {
                // 👇 se for do tipo errado, manda pra área correspondente
                if (usuario.tipo === "administrador") {
                    router.replace("/administrador");
                } else {
                    router.replace("/usuario");
                }
            }
        }
    }, [usuario, carregando, router, permitido]);

    if (carregando || !usuario) {
        return (
            <div className="w-full min-h-screen bg-azul flex justify-center items-center">
                <h2 className="text-white text-3xl font-black">Carregando...</h2>
            </div>
        );
    }

    if (usuario.tipo !== permitido) return null; // evita piscar conteúdo errado

    return <>{children}</>;
}
