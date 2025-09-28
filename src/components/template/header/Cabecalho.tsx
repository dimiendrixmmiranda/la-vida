'use client'
import { usePathname } from "next/navigation";
import RedesSociais from "@/components/redesSociais/RedesSociais";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponent";
import menuItems from "@/lib/constants/menuItems";
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
    const pathname = usePathname();

    // Tabela de regras de redirecionamento
    const specialLinks: Record<string, { home: string; other: string }> = {
        FAQ: { home: "#faq", other: "/faq" },
        Contato: { home: "#contato", other: "/contato" },
        // você pode adicionar mais aqui
        // Exemplo: "Serviços": { home: "#servicos", other: "/servicos" }
    };

    return (
        <header className="absolute top-0 left-0 w-full z-10 p-2 flex text-white xl:p-4">
            <Link href={'/'} className="flex items-center gap-2 flex-1 lg:flex-none">
                <div className="w-12 h-12 relative">
                    <Image alt="Logo da Lavanderia La Vida" src={'/logo-la-vida-header.png'} fill className="object-contain" />
                </div>
                <h1 className="font-cursiva font-black text-5xl" style={{ textShadow: '0 0 3px black' }}>La Vida</h1>
            </Link>

            <nav className="hidden gap-1 h-fit my-auto z-40 lg:flex lg:flex-1 lg:justify-center xl:gap-2">
                {menuItems.map((item, idx) => {
                    // Se o item estiver na tabela, aplica a regra
                    const rule = specialLinks[item.label];
                    const href = rule
                        ? pathname === "/" ? rule.home : rule.other
                        : item.href;

                    return (
                        <div key={idx} className="relative group h-fit">
                            {!item.children ? (
                                <Link
                                    href={href || "/"}
                                    className="h-fit self-center text-sm p-2 flex items-center gap-2 font-bold transition-all duration-300 hover:bg-azul-escuro xl:text-base 2xl:text-lg"
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ) : (
                                <>
                                    <button
                                        className="h-fit self-center text-sm p-2 flex items-center gap-2 font-bold transition-all duration-300 hover:bg-azul-escuro xl:text-base 2xl:text-lg"
                                    >
                                        {item.icon}
                                        {item.label}
                                    </button>
                                    <div className="absolute left-0 hidden group-hover:block bg-azul-escuro rounded-lg shadow-lg z-40">
                                        <ul className="flex flex-col">
                                            {item.children.map((child, cidx) => (
                                                <li key={cidx}>
                                                    <Link
                                                        href={child.href}
                                                        className="block px-4 py-2 hover:bg-azul-medio whitespace-nowrap z-40"
                                                    >
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
            <SidebarComponent />
        </header>
    )
}
