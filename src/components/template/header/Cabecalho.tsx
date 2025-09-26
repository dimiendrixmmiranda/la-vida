'use client'
import RedesSociais from "@/components/redesSociais/RedesSociais";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponent";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneSchedule } from "react-icons/ai";
import { FaMoneyBillWave, FaQuestionCircle } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdContactPhone, MdMiscellaneousServices } from "react-icons/md";

export default function Cabecalho() {
    const menuItems = [
        { label: "Home", icon: <FaHouseChimney />, href: "/" },
        { label: "Serviços", icon: <MdMiscellaneousServices />, href: "/" },
        // {
        //     label: "Serviços", icon: <MdMiscellaneousServices />, children: [
        //         { label: "Lavagem", href: "/" },
        //         { label: "Secagem", href: "/" },
        //         { label: "Passadoria", href: "/" },
        //         { label: "Combos", href: "/" },
        //         { label: "Planos Mensais", href: "/" },
        //         { label: "Coleta e Entrega", href: "/" },
        //     ]
        // },
        { label: "Preços", icon: <FaMoneyBillWave />, href: "/" },
        { label: "Agendamento/Solicite Coleta", icon: <AiTwotoneSchedule />, href: "/" },
        { label: "Contato", icon: <MdContactPhone />, href: "/" },
        { label: "FAQ", icon: <FaQuestionCircle />, href: "/" },
    ]
    return (
        <header className="absolute top-0 left-0 w-full z-10 p-2 flex text-white xl:p-4">
            <div className="flex items-center gap-2 flex-1 lg:flex-none">
                <div className="w-12 h-12 relative">
                    <Image alt="Logo da Lavanderia La Vida" src={'/logo-la-vida.png'} fill className="object-contain" />
                </div>
                <h1 className="font-cursiva font-black text-5xl mt-2">La Vida</h1>
            </div>
            <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-center">
                {menuItems.map((item, idx) => {
                    return (
                        <Link
                            key={idx}
                            href={item.href}
                            className="h-fit self-center p-2 flex items-center gap-2 font-bold transition-all duration-300 hover:bg-azul-escuro 2xl:text-xl"
                        >
                            {item.icon}{item.label}
                        </Link>
                    )
                })}


            </div>
            <div className="flex self-center">
                <RedesSociais mobile={false}/>
            </div>
            <SidebarComponent />
        </header>
    )
}