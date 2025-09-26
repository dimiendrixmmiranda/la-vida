import { FaAward, FaBolt, FaBoxOpen, FaClock, FaFlask, FaShieldVirus, FaSoap, FaSteam, FaTruck } from "react-icons/fa6";
import { RiScalesLine } from "react-icons/ri";
import { Gradiente } from "@/components/gradiente/Gradiente";
import { GiClothes, GiWashingMachine } from "react-icons/gi";
import { MdBlockFlipped, MdIron } from "react-icons/md";
import { FaAdjust, FaCalendarAlt, FaFeatherAlt, FaShieldAlt, FaShoppingBasket, FaTshirt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Onda from "../onda/Onda";
export default function Vantagens() {
    return (
        <>
            <div className="min-h-screen bg-white p-4 flex justify-center items-center">
                <div className="flex flex-col gap-4 md:p-8 lg:gap-8">
                    <div className="flex flex-col gap-4 lg:gap-8">
                        <h3 className="text-3xl font-semibold leading-[1.3em] text-center text-azul-medio md:text-5xl md:leading-[1.3em]">Dedique seu tempo ao que realmente importa: <b className="font-black">VOCÊ!</b></h3>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            <div className="flex flex-col justify-center items-center text-azul-medio">
                                <GiWashingMachine className="text-5xl md:text-7xl xl:text-[6em]" />
                                <p className="uppercase font-black leading-5 text-2xl mt-2 md:text-3xl xl:text-4xl">30 min</p>
                                <span className="font-semibold leading-5 mt-1 text-center md:text-lg xl:text-xl">Para Lavar</span>
                            </div>
                            <div className="flex flex-col justify-center items-center text-azul-medio">
                                <GiClothes className="text-5xl md:text-7xl xl:text-[6em]" />
                                <p className="uppercase font-black leading-5 text-2xl mt-2 md:text-3xl xl:text-4xl">40 min</p>
                                <span className="font-semibold leading-5 mt-1 text-center md:text-lg xl:text-xl">Para Secar</span>
                            </div>
                            <div className="flex flex-col justify-center items-center text-azul-medio">
                                <MdIron className="text-5xl md:text-7xl xl:text-[6em]" />
                                <p className="uppercase font-black leading-5 text-2xl mt-2 md:text-3xl xl:text-4xl">40 min</p>
                                <span className="font-semibold leading-5 mt-1 text-center md:text-lg xl:text-xl">Para Passar</span>
                            </div>
                            <div className="flex flex-col justify-center items-center text-azul-medio">
                                <FaShieldVirus className="text-5xl md:text-7xl xl:text-[6em]" />
                                <p className="uppercase font-black leading-5 text-2xl mt-2 md:text-3xl xl:text-4xl">100%</p>
                                <span className="font-semibold leading-5 mt-1 text-center md:text-lg xl:text-xl">Produtos profissionais</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-semibold text-azul-medio mb-4">Quem usa La Vida não quer parar! <b className="font-black">Siga as recomendações:</b></h3>
                        <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:gap-8">
                            <Gradiente>
                                <li className="bg-azul-medio text-white">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="uppercase font-black text-3xl">Beneficios</h3>
                                        <ul className="flex flex-col gap-2 lg:gap-4">
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaTshirt className="text-2xl my-auto" />
                                                <p>Roupas sempre limpas e perfumadas</p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaBolt className="text-2xl my-auto" />
                                                <p>
                                                    Praticidade no dia a dia
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaFlask className="text-2xl my-auto" />
                                                <p>
                                                    Flexibilidade na quantidade de sabão e amaciante
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaClock className="text-2xl my-auto" />
                                                <p>
                                                    Economia de tempo
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaShieldAlt className="text-2xl my-auto" />
                                                <p>
                                                    Maior durabilidade das peças
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </Gradiente>
                            <Gradiente>
                                <li className="bg-azul-medio text-white">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="uppercase font-black text-3xl">Comodidades</h3>
                                        <ul className="flex flex-col gap-2 lg:gap-4">
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaTruck className="text-2xl my-auto" />
                                                <p>
                                                    Retirada e entrega em domicílio
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaSoap className="text-2xl my-auto" />
                                                <p>
                                                    Escolha da marca de sabão e amaciante
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaShoppingBasket className="text-2xl my-auto" />
                                                <p>
                                                    Cesto medidor para ajuste de produtos
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaCalendarAlt className="text-2xl my-auto" />
                                                <p>
                                                    Agendamento online ou por telefone
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaBoxOpen className="text-2xl my-auto" />
                                                <p>
                                                    Pacotes econômicos por quantidade de peças
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </Gradiente>
                            <Gradiente>
                                <li className="bg-azul-medio text-white">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="uppercase font-black text-3xl">Não fazemos</h3>
                                        <ul className="flex flex-col gap-2 lg:gap-4">
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <MdBlockFlipped className="text-2xl my-auto" />
                                                <p>
                                                    Não usar produtos de baixa qualidade
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <MdBlockFlipped className="text-2xl my-auto" />
                                                <p>
                                                    Não danificar roupas ou acessórios
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <MdBlockFlipped className="text-2xl my-auto" />
                                                <p>
                                                    Não atrasar prazos de entrega
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <MdBlockFlipped className="text-2xl my-auto" />
                                                <p>
                                                    Não cobrar valores diferentes sem aviso
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <MdBlockFlipped className="text-2xl my-auto" />
                                                <p>
                                                    Não deixar o ambiente ou as máquinas sujas
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </Gradiente>
                            <Gradiente>
                                <li className="bg-azul-medio text-white">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="uppercase font-black text-3xl">Dicas</h3>
                                        <ul className="flex flex-col gap-2 lg:gap-4">
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaAdjust className="text-2xl my-auto" />
                                                <p>
                                                    Separe claras e escuras.
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaFeatherAlt className="text-2xl my-auto" />
                                                <p>
                                                    Lave delicadas em ciclos suaves.
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <RiScalesLine className="text-2xl my-auto" />
                                                <p>
                                                    Use a quantidade certa de sabão e amaciante.
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaSteam className="text-2xl my-auto" />
                                                <p>
                                                    Passe roupas levemente úmidas.
                                                </p>
                                            </li>
                                            <li className="grid grid-cols-[25px_1fr] gap-2">
                                                <FaAward className="text-2xl my-auto" />
                                                <p>
                                                    Prefira produtos de qualidade.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </Gradiente>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center bg-green-600 text-white py-2 text-xl uppercase font-bold max-w-[450px] w-full mx-auto transition-all duration-300 hover:scale-[1.1]">
                        <Link href={'/'} className="px-2 grid grid-cols-[40px_1fr] gap-1"><FaWhatsapp className="my-auto mx-auto text-3xl" />Entre Em Contato com Agente!</Link>
                    </div>
                </div>
            </div>
            <Onda invertido={true} />
        </>
    )
}