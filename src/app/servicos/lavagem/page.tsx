'use client'
import Botao from "@/components/botao/Botao";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";
import Template from "@/components/template/Template";
import Image from "next/image";
import { IoMdReturnLeft } from "react-icons/io";

export default function Page() {
    return (
        <RotaProtegida permitido="usuario">
            <Template ondaInvertida={true}>
                <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                    <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1200px] xl:gap-8">
                        <h2 className="uppercase text-3xl text-center xl:text-5xl">Confira nossos tipos de lavagem:</h2>
                        <ul className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[400px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/lavagem-a-seco.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Lavagem a Seco</h3>
                                <p className="text-lg leading-6 text-center">
                                    Esse tipo de lavagem não utiliza água, mas sim solventes específicos — geralmente o percloroetileno ou produtos mais modernos e ecológicos. É indicada para tecidos delicados, como lã, seda, veludo e ternos, que poderiam encolher, deformar ou perder a cor em contato com a água. O processo remove manchas e sujeiras profundas sem danificar as fibras, mantendo a textura e o caimento originais da roupa.
                                </p>
                            </li>
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[400px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/lavagem-com-sabao-neutro.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Lavagem com sabão neutro</h3>
                                <p className="text-lg leading-6 text-center">
                                    Esse tipo de lavagem não utiliza água, mas sim solventes específicos — geralmente o percloroetileno ou produtos mais modernos e ecológicos. É indicada para tecidos delicados, como lã, seda, veludo e ternos, que poderiam encolher, deformar ou perder a cor em contato com a água. O processo remove manchas e sujeiras profundas sem danificar as fibras, mantendo a textura e o caimento originais da roupa.
                                </p>
                            </li>
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[400px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/lavagem-ecologica.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Lavagem ecológica</h3>
                                <p className="text-lg leading-6 text-center">
                                    Esse tipo de lavagem não utiliza água, mas sim solventes específicos — geralmente o percloroetileno ou produtos mais modernos e ecológicos. É indicada para tecidos delicados, como lã, seda, veludo e ternos, que poderiam encolher, deformar ou perder a cor em contato com a água. O processo remove manchas e sujeiras profundas sem danificar as fibras, mantendo a textura e o caimento originais da roupa.
                                </p>
                            </li>
                        </ul>
                        <div className="max-w-[300px] ml-auto w-full">
                            <Botao cor="bg-orange-500" texto="Voltar" icone={<IoMdReturnLeft className="text-lg" />} link="/" />
                        </div>
                    </div>
                </div>
            </Template>
        </RotaProtegida>
    )
}