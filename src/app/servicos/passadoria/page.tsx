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
                        <h2 className="uppercase text-3xl text-center xl:text-5xl">Confira nossas técnicas de passadoria:</h2>
                        <ul className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[400px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/passadoria-manual.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Passadoria Manual</h3>
                                <p className="text-lg leading-6 text-center">
                                    A passadoria manual é o método tradicional, feito com ferro doméstico. Permite um cuidado mais detalhado com cada peça, ajustando a temperatura conforme o tipo de tecido. É ideal para quem deseja um acabamento caprichado em roupas delicadas, garantindo que fiquem bem dobradas, alinhadas e com aparência impecável.
                                </p>
                            </li>
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[400px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/passadoria-profissional.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Passadoria Profissional</h3>
                                <p className="text-lg leading-6 text-center">
                                    A passadoria profissional é realizada com equipamentos e técnicas específicas usadas em lavanderias. Ela proporciona resultados de alta qualidade, eliminando até os vincos mais difíceis e deixando as roupas com um acabamento uniforme. Além disso, os profissionais utilizam produtos que perfumam e preservam as fibras, garantindo que as peças saiam bem passadas, dobradas e prontas para o uso.
                                </p>
                            </li>
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[400px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/passadoria-a-vapor.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Passadoria a Vapor</h3>
                                <p className="text-lg leading-6 text-center">
                                    A passadoria a vapor é uma opção moderna e prática, ideal para tecidos que amassam com facilidade. O vapor quente relaxa as fibras sem o contato direto do ferro, evitando danos e proporcionando um visual leve e natural às roupas. Também ajuda a eliminar odores e germes, deixando as peças higienizadas, macias e com um toque suave de perfume.
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