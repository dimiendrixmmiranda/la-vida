import Link from "next/link";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { FaWhatsapp } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import Onda from "../onda/Onda";

export default function TelaInicial() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <div className="flex flex-col justify-center items-center z-20 p-4">
                    <h2 className="my-2 text-[4em] leading-[.9em] relative font-cursiva font-bold text-center text-white dark:text-white font-sans tracking-tight md:text-[5em] md:my-4 2xl:text-[7em] 2xl:my-6" style={{ textShadow: '1px 1px 2px black' }}>
                        La vida - Mais que lavar roupas,
                        <div className="relative mt-5 mx-auto block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="text-azul-medio" style={{textShadow: '1px 1px 3px white'}}>
                                <span
                                    className="block leading-[.7em]"
                                >
                                    Lavamos Preocupações!
                                </span>
                            </div>
                        </div>
                    </h2>
                    <div className="mt-5 font-terciaria text-center text-xl leading-7 text-white md:text-2xl 2xl:text-3xl">
                        <span className="flex" style={{textShadow: '1px 1px 2px black'}}>Lavagem, secagem e passagem de roupas de forma rápida, prática e econômica!</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-white mt-4 font-primaria">
                        <Link href={'/'} className="grid grid-cols-[35px_1fr] p-1 bg-green-600 gap-2 rounded-md md:flex md:justify-center md:p-2">
                            <FaWhatsapp className="text-3xl mx-auto my-auto md:mx-0" />
                            <p className="line-clamp-3 leading-5 uppercase font-bold text-center my-auto mx-0">Fale com a Unidade Mais Próxima</p>
                        </Link>

                        <Link href={'/'} className="grid grid-cols-[35px_1fr] p-1 bg-azul gap-2 rounded-md md:flex md:justify-center md:p-2">
                            <FaShippingFast className="text-3xl mx-auto my-auto md:mx-0" />
                            <p className="line-clamp-3 leading-5 uppercase font-bold text-center my-auto mx-0">Solicite a coleta de Roupas</p>
                        </Link>
                        <Link href={'/usuario'} className="col-start-1 col-end-3 bg-azul-escuro py-2 md:py-4">
                            <p className="line-clamp-3 leading-5 uppercase font-bold text-center my-auto mx-0">Crie sua conta agora e aproveite todas as nossas vantagens!</p>
                        </Link>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
            <Onda invertido={true} primeiraOnda={true} />
        </>
    )
}