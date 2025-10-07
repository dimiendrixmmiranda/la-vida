'use client'
import Botao from "@/components/botao/Botao";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";
import Template from "@/components/template/Template";
import Image from "next/image";
import { BsFillBackpack2Fill } from "react-icons/bs";
import { IoMdReturnLeft } from "react-icons/io";

export default function Page() {
    return (
        <RotaProtegida permitido="usuario">
            <Template ondaInvertida={true}>
                <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                    <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1600px] xl:gap-8">
                        <h2 className="uppercase text-3xl text-center xl:text-5xl">Confira nossos planos!</h2>
                        <ul className="flex flex-col gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-4">
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[450px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/plano-essencial.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Plano Essencial</h3>
                                <p className="text-lg leading-6 text-center line-clamp-[10]">
                                    A passadoria manual é o método tradicional, feito com ferro doméstico. Permite um cuidado mais detalhado com cada peça, ajustando a temperatura conforme o tipo de tecido. É ideal para quem deseja um acabamento caprichado em roupas delicadas, garantindo que fiquem bem dobradas, alinhadas e com aparência impecável.
                                </p>
                                <div className="flex flex-col gap-2 w-full">
                                    <h3 className="font-bold text-xl">Vantagens</h3>
                                    <ul className="list-disc ml-6 flex flex-col gap-1 sm:ml-8">
                                        <li>
                                            <p className="leading-5">🧺 Até 20 peças por mês</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Lavagem + passadoria + entrega</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">1 coleta e entrega por semana</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Prazo de entrega: até 48h</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <h4 className="text-4xl font-black">R$79,90</h4>
                                </div>
                                <div className="text-white w-full">
                                    <Botao cor="bg-orange-500" texto="Contratar Plano" icone={<BsFillBackpack2Fill className="text-lg" />} link="/" />
                                </div>
                            </li>
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[450px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/plano-plus.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Plano Plus</h3>
                                <p className="text-lg leading-6 text-center line-clamp-[10]">
                                    A passadoria profissional é realizada com equipamentos e técnicas específicas usadas em lavanderias. Ela proporciona resultados de alta qualidade, eliminando até os vincos mais difíceis e deixando as roupas com um acabamento uniforme. Além disso, os profissionais utilizam produtos que perfumam e preservam as fibras, garantindo que as peças saiam bem passadas, dobradas e prontas para o uso.
                                </p>
                                <div className="flex flex-col gap-2 w-full">
                                    <h3 className="font-bold text-xl">Vantagens</h3>
                                    <ul className="list-disc ml-6 flex flex-col gap-1 sm:ml-8">
                                        <li>
                                            <p className="leading-5">🧺 Até 40 peças por mês</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Lavagem + passadoria + entrega</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">1 coleta e entrega por semana</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Desconto de 10% em peças adicionais</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <h4 className="text-4xl font-black">R$139,90</h4>
                                </div>
                                <div className="text-white w-full">
                                    <Botao cor="bg-orange-500" texto="Contratar Plano" icone={<BsFillBackpack2Fill className="text-lg" />} link="/" />
                                </div>
                            </li>
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[450px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/plano-familia.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Plano Família</h3>
                                <p className="text-lg leading-6 text-center line-clamp-[10]">
                                    A passadoria a vapor é uma opção moderna e prática, ideal para tecidos que amassam com facilidade. O vapor quente relaxa as fibras sem o contato direto do ferro, evitando danos e proporcionando um visual leve e natural às roupas. Também ajuda a eliminar odores e germes, deixando as peças higienizadas, macias e com um toque suave de perfume.
                                </p>
                                <div className="flex flex-col gap-2 w-full">
                                    <h3 className="font-bold text-xl">Vantagens</h3>
                                    <ul className="list-disc ml-6 flex flex-col gap-1 sm:ml-8">
                                        <li>
                                            <p className="leading-5">🧺 Até 80 peças por mês</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Lavagem + passadoria + entrega</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">2 coletas e entregas por semana</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Tratamento especial para roupas de cama e banho</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Desconto de 15% em peças extras</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <h4 className="text-4xl font-black">R$239,90</h4>
                                </div>
                                <div className="text-white w-full">
                                    <Botao cor="bg-orange-500" texto="Contratar Plano" icone={<BsFillBackpack2Fill className="text-lg" />} link="/" />
                                </div>
                            </li>
                            <li className="bg-white text-black flex flex-col gap-4 justify-center items-center p-4 max-w-[450px] mx-auto">
                                <div className="splash overflow-hidden flex justify-center items-center" style={{ boxShadow: '0 0 4px 2px blue' }}>
                                    <div className="relative w-full h-full">
                                        <Image alt="Imagem" src={'/plano-premium.png'} fill className="object-cover" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center">Plano Premium</h3>
                                <p className="text-lg leading-6 text-center line-clamp-[10]">
                                    A passadoria a vapor é uma opção moderna e prática, ideal para tecidos que amassam com facilidade. O vapor quente relaxa as fibras sem o contato direto do ferro, evitando danos e proporcionando um visual leve e natural às roupas. Também ajuda a eliminar odores e germes, deixando as peças higienizadas, macias e com um toque suave de perfume.
                                </p>
                                <div className="flex flex-col gap-2 w-full">
                                    <h3 className="font-bold text-xl">Vantagens</h3>
                                    <ul className="list-disc ml-6 flex flex-col gap-1 sm:ml-8">
                                        <li>
                                            <p className="leading-5">🧺 Até 120 peças por mês</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Coleta e entrega sob demanda (sem limite fixo de dias)</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Atendimento prioritário</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Tratamento antiodor e amaciante premium</p>
                                        </li>
                                        <li>
                                            <p className="leading-5">Desconto de 20% em itens adicionais</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <h4 className="text-4xl font-black">R$329,90</h4>
                                </div>
                                <div className="text-white w-full">
                                    <Botao cor="bg-orange-500" texto="Contratar Plano" icone={<BsFillBackpack2Fill className="text-lg" />} link="/" />
                                </div>
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