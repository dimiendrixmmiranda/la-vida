'use client'
import RedesSociais from "@/components/redesSociais/RedesSociais";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponent";
import Image from "next/image";
import Link from "next/link";
import { useMenuItems } from "@/lib/constants/menuItems";
import useAuth from "@/data/hooks/useAuth";

interface CabecalhoProps {
    paginaHome: boolean
}

export default function Cabecalho({ paginaHome }: CabecalhoProps) {
    const { usuario } = useAuth()
    const menuItems = useMenuItems(`${paginaHome ? '#contato' : '/contato'}`, `${paginaHome ? '#faq' : '/faq'}`, `${usuario ? '/menuUsuario/novoPedido' : '/login'}`);

    return (
        <header className="absolute top-0 left-0 w-full z-30 p-2 flex text-white xl:p-4">
            <Link href={'/'} className="flex items-center gap-2 flex-1 lg:flex-none">
                <div className="w-12 h-12 relative">
                    <Image alt="Logo da Lavanderia La Vida" src={'/logo-la-vida-header.png'} fill className="object-contain" />
                </div>
                <h1 className="font-cursiva font-black text-5xl" style={{ textShadow: '0 0 3px black' }}>La Vida</h1>
            </Link>

            <nav className="hidden gap-1 h-fit my-auto z-40 lg:flex lg:flex-1 lg:justify-center xl:gap-2">
                {menuItems.map((item, idx) => {
                    return (
                        <div key={idx} className="relative group h-fit">
                            {!item.children ? (
                                <Link
                                    href={item.href}
                                    className="h-fit self-center text-sm p-2 flex items-center gap-2 font-bold transition-all duration-300 hover:bg-azul-escuro xl:text-base 2xl:text-lg"
                                >
                                    <div className="w-[16px] h-[16px]">
                                        {item.icon}
                                    </div>
                                    <p>
                                        {item.label}
                                    </p>
                                </Link>
                            ) : (
                                <>
                                    <button
                                        className="h-fit self-center text-sm p-2 flex items-center gap-2 font-bold transition-all duration-300 group-hover:bg-azul-escuro hover:bg-azul-escuro xl:text-base 2xl:text-lg"
                                    >
                                        {item.icon}
                                        {item.label}
                                    </button>
                                    <div className="absolute left-0 hidden group-hover:block bg-azul-escuro rounded-lg shadow-lg">
                                        <ul className="flex flex-col">
                                            {item.children.map((child, cidx) => (
                                                <li key={cidx}>
                                                    <Link
                                                        href={child.href}
                                                        className="px-4 py-2 hover:bg-azul-medio whitespace-nowrap z-40 flex items-center gap-2"
                                                    >
                                                        {child.icon}
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}
            </nav>

            <div className="flex self-center">
                <RedesSociais mobile={false} />
            </div>
            <SidebarComponent paginaHome={paginaHome}/>
        </header>
    )
}
