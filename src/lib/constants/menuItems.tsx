'use client'
import useAuth from "@/data/hooks/useAuth";
import Image from "next/image";
import { AiTwotoneSchedule } from "react-icons/ai";
import { FaQuestionCircle, FaUserAlt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdContactPhone, MdMiscellaneousServices } from "react-icons/md";

export function useMenuItems(linkContato: string, linkFAQ: string) {
    const { usuario } = useAuth();
    console.log(usuario)
    return [
        { label: "Home", icon: <FaHouseChimney />, href: "/" },
        {
            label: "Serviços", icon: <MdMiscellaneousServices />, children: [
                { label: "Preços", href: "/" },
                { label: "Lavagem", href: "/" },
                { label: "Secagem", href: "/" },
                { label: "Passadoria", href: "/" },
                { label: "Combos", href: "/" },
                { label: "Planos Mensais", href: "/" },
                { label: "Coleta e Entrega", href: "/" },
            ]
        },
        {
            label: `${usuario != null ? `Bem vindo ${usuario.nome.split(' ')[0]}` : 'Área do Usuário'}`, icon: usuario != null ? (
                <div className="relative w-full h-full bg-red-500 rounded-full overflow-hidden" title={usuario.nome}>
                    <Image alt="Imagem do Usuário" src={usuario.imagemURL} fill className="object-cover"/>
                </div>
            ) : <FaUserAlt />,
            href: `${usuario != null ? '/usuario' : '/login'}`
        },
        { label: "Agendamento/Solicite Coleta", icon: <AiTwotoneSchedule />, href: `/` },
        { label: "Contato", icon: <MdContactPhone />, href: linkContato },
        { label: "FAQ", icon: <FaQuestionCircle />, href: linkFAQ },
    ];
}
