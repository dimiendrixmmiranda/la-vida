'use client'
import Template from "@/components/template/Template";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import useAuth from "@/data/hooks/useAuth";
import { FaUserAlt, FaBoxOpen, FaCheckCircle, FaMapMarkerAlt, FaTshirt, FaHeadset } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

export default function Page() {
    const { logout, usuario } = useAuth()
    const projects = [
        {
            title: "Meu Perfil",
            description:
                "Acesse e gerencie suas informações pessoais, atualize dados de contato e visualize seu histórico de atividade.",
            link: "/menuUsuario/perfil",
            icon: <FaUserAlt className="text-5xl" />
        },
        {
            title: "Pedidos em Aberto",
            description:
                "Confira todos os pedidos que ainda estão em andamento, acompanhe o status de cada um e verifique prazos de entrega.",
            link: "",
            icon: <FaBoxOpen className="text-5xl" />
        },
        {
            title: "Pedidos Concluídos",
            description:
                "Visualize todos os pedidos finalizados, com detalhes de produtos, datas e histórico de compras anteriores.",
            link: "",
            icon: <FaCheckCircle className="text-5xl" />
        },
        {
            title: "Adicionar Endereço",
            description:
                "Adicione ou atualize endereços de entrega para tornar suas compras mais rápidas e garantir que cheguem ao local correto.",
            link: "/menuUsuario/adicionarEndereco",
            icon: <FaMapMarkerAlt className="text-5xl" />
        },
        {
            title: "Preferências de Lavagem",
            description:
                "Configure suas preferências de lavagem, como tipo de produto, intensidade de limpeza e cuidados especiais com tecidos.",
            link: "/menuUsuario/preferencias",
            icon: <FaTshirt className="text-5xl" />
        },
        {
            title: "Suporte/Chat",
            description:
                "Entre em contato com nossa equipe de suporte para tirar dúvidas, resolver problemas e receber atendimento personalizado.",
            link: "https://wa.me/5543988252886?text=Bem%20Vindo%20a%20La%20Vida%2C%20como%20posso%20ajudar%3F",
            icon: <FaHeadset className="text-5xl" />
        },
    ]
    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:-mb-20 lg:-mb-24">
                <div className="mt-[80px] flex flex-col gap-4 xl:gap-8">
                    <h2 className="uppercase text-3xl text-center xl:text-5xl">Bem vindo <b>{usuario?.nome.split(' ')[0]}</b> <b>{usuario?.nome.split(' ')[usuario?.nome.split(' ').length - 1]}</b></h2>
                    <div className="max-w-5xl mx-auto">
                        <HoverEffect items={projects} />
                    </div>
                    <button
                        className="flex justify-center items-center bg-red-500 py-2 text-2xl font-black gap-2"
                        onClick={() => logout && logout('/')}
                        style={{boxShadow: '0 0 3px 2px black', textShadow: '1px 1px 2px black'}}
                    >
                        <IoLogOut />
                        <p>Logout</p>
                    </button>
                </div>
            </div>
        </Template>
    )
}