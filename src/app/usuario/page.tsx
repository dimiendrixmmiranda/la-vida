'use client'
import Template from "@/components/template/Template";
import useAuth from "@/data/hooks/useAuth";

export default function Page() {
    const { logout } = useAuth()

    return (
        <Template ondaInvertida={false}>
            <div className="min-h-screen bg-azul-medio flex justify-center items-center text-white">
                aqui
                <button onClick={() => logout && logout('/')}>Logout</button>
            </div>
        </Template>
    )
}