import Image from "next/image";
import Onda from "../onda/Onda";
import RedesSociaisAlternativo from "../redesSociais/RedesSociaisAlternativo";
import MapaWrapper from "./MapaWrapper";

export default function Contato() {
    const position: [number, number] = [-23.498266207837037, -49.92588432309148]

    return (
        <>
            <div className="min-h-screen bg-azul-medio text-white p-4 flex flex-col gap-4 justify-center items-center md:p-8 lg:gap-8" id="contato">
                <div className="flex flex-col justify-center items-center font-primaria">
                    <h2 className="text-4xl uppercase font-black sm:text-6xl lg:text-[7em]">Vamos</h2>
                    <h3 className="text-4xl uppercase font-black text-transparent sm:text-6xl lg:text-[7em]" style={{ WebkitTextStroke: '2px white' }}>Conversar?</h3>
                </div>
                <div>
                    <p className="text-center text-xl uppercase leading-6 md:text-3xl xl:text-4xl">Quer saber como facilitar sua rotina? Fale com a gente!</p>
                </div>
                <div>
                    <RedesSociaisAlternativo />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 w-full h-full max-w-[1200px] mx-auto md:grid md:grid-cols-2 xl:grid-cols-3">
                    <div className="w-[300px] h-[300px] relative justify-self-center lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px]">
                        <Image alt="visita" src={'/visita.png'} fill className="object-contain" />
                    </div>
                    <div className="w-[300px] h-[300px] relative justify-self-center lg:w-full lg:h-[350px] xl:col-start-2 xl:col-end-4 xl:h-[400px]">
                        <MapaWrapper position={position} />
                    </div>
                </div>
            </div>
            <Onda invertido={false} />
        </>
    )
}