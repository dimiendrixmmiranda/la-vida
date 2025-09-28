import React, { ReactNode, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Link from 'next/link';
import RedesSociais from '../redesSociais/RedesSociais';
import menuItems from '@/lib/constants/menuItems';

interface MenuItem {
    label: string
    icon?: ReactNode
    href?: string
    children?: MenuItem[]
}

export default function SidebarComponent() {
    const [visibleRight, setVisibleRight] = useState(false);

    // Header genérico para itens do Accordion
    const accordionHeader = (item: MenuItem) => (
        <span className="flex items-center gap-2 text-[1.1em]">
            {item.icon}
            {item.label}
        </span>
    );

    return (
        <div className="card flex justify-center lg:hidden">
            <div className="flex gap-2 justify-center items-center">
                <Button onClick={() => setVisibleRight(true)} className='text-4xl'>
                    <GiHamburgerMenu />
                </Button>
            </div>
            <Sidebar
                visible={visibleRight}
                position="right"
                onHide={() => setVisibleRight(false)}
                header={<h2 className='text-3xl font-bold'>Menu</h2>}
                className='w-[95%] max-w-[400px]'
            >
                <div className='flex flex-col h-full md:px-4'>
                    <div className="flex flex-col relative">
                        {menuItems.map((item, idx) =>
                            item.children ? (
                                <Accordion key={idx} className='sidebarMobile p-2'>
                                    <AccordionTab headerTemplate={() => accordionHeader(item)}>
                                        <ul className="flex flex-col gap-2 pl-4">
                                            {item.children.map((subItem, subIdx) => (
                                                <li key={subIdx}>
                                                    <Link
                                                        href={subItem.href}
                                                        className="block p-2 hover:bg-red-300 rounded"
                                                        onClick={() => setVisibleRight(false)}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionTab>
                                </Accordion>
                            ) : (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="text-[1em] p-2 flex items-center gap-2 font-bold sm:text-xl"
                                    onClick={() => setVisibleRight(false)}
                                >
                                    {item.icon}{item.label}
                                </Link>
                            )
                        )}
                    </div>
                    <div className='mt-auto'>
                        <RedesSociais mobile={true} />
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}
