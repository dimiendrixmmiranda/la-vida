'use client'
import useAuth from "@/data/hooks/useAuth";
import Image from "next/image";
import { AiTwotoneSchedule } from "react-icons/ai";
import { FaQuestionCircle, FaUserAlt } from "react-icons/fa";
import { FaHouseChimney, FaShirt, FaTags } from "react-icons/fa6";
import { MdContactPhone, MdIron, MdMiscellaneousServices } from "react-icons/md";
import { BsCalendar2Month } from "react-icons/bs";
import { WiStrongWind } from "react-icons/wi";

export function useMenuItems(linkContato: string, linkFAQ: string, pedidos: string) {
    const { usuario } = useAuth();

    return [
        { label: "Home", icon: <FaHouseChimney />, href: "/" },
        {
            label: "Serviços", icon: <MdMiscellaneousServices />, children: [
                { label: "Preços", icon: <FaTags />, href: "/servicos/precos" },
                { label: "Lavagem", icon: <FaShirt />, href: "/servicos/lavagem" },
                { label: "Secagem", icon: <WiStrongWind />, href: "/servicos/secagem" },
                { label: "Passadoria", icon: <MdIron />, href: "/servicos/passadoria" },
                { label: "Planos", icon: <BsCalendar2Month />, href: "/servicos/planos" },
            ]
        },
        {
            label: `${usuario != null ? `Bem vindo ${usuario.nome.split(' ')[0]}` : 'Área do Usuário'}`, icon: usuario != null ? (
                <div className="relative w-full h-full bg-red-500 rounded-full overflow-hidden" title={usuario.nome}>
                    <Image alt="Imagem do Usuário" src={usuario.imagemURL} fill className="object-cover" />
                </div>
            ) : <FaUserAlt />,
            href: `${usuario != null ? '/usuario' : '/login'}`
        },
        { label: "Realizar Pedido", icon: <AiTwotoneSchedule />, href: pedidos },
        { label: "Contato", icon: <MdContactPhone />, href: linkContato },
        { label: "FAQ", icon: <FaQuestionCircle />, href: linkFAQ },
    ];
}
