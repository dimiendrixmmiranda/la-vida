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
                    <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1000px] xl:gap-8">
                        <h2 className="uppercase text-3xl text-center xl:text-5xl">Confira nossos tipos de Secagem:</h2>
                        <ul className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[500px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/secagem-natural.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Secagem Natural</h3>
                                <p className="text-lg leading-6 text-center">
                                    A secagem natural é o método mais tradicional e ecológico. As roupas são estendidas ao ar livre, permitindo que o vento e o sol realizem o processo de evaporação da água. Esse tipo de secagem preserva melhor as fibras dos tecidos, evitando o encolhimento e o desgaste prematuro. Além disso, reduz o consumo de energia elétrica e deixa as peças com um aroma naturalmente fresco. É ideal para tecidos delicados e roupas que não suportam altas temperaturas.
                                </p>
                            </li>
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[500px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/secagem-maquina.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Secagem em Máquina com Temperatura Controlada</h3>
                                <p className="text-lg leading-6 text-center">
                                    A secagem em máquina com temperatura controlada é um método moderno e eficiente, que utiliza tecnologia para ajustar o calor conforme o tipo de tecido. Isso garante uma secagem rápida e segura, sem danificar as peças. Entre seus principais benefícios estão a praticidade, especialmente em dias chuvosos, a redução de tempo no processo de lavanderia e a higienização mais completa das roupas, já que o calor ajuda a eliminar germes e bactérias. É uma ótima opção para quem busca conveniência e cuidado profissional com as roupas.
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