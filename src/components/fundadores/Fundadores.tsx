import Carrossel from "../carrossel/Carrossel";
import Onda from "../onda/Onda";

export default function Fundadores() {
    return (
        <>
            <Onda invertido={false} />
            <div className="min-h-screen bg-white text-azul-medio p-4 flex flex-col gap-6 justify-center items-center lg:gap-10">
                <h3 className="text-3xl font-black text-center lg:text-5xl">Conheça nossos <b className="font-black uppercase">Fundadores!</b></h3>
                <Carrossel />
            </div>
            <Onda invertido={true} />
        </>
    )
}