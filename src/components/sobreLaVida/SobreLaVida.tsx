import Image from "next/image";
import Onda from "../onda/Onda";

export default function SobreLaVida() {
    return (
        <>
            <div className="min-h-screen bg-azul-medio p-4 flex justify-center items-center">
                <div className="flex flex-col items-center lg:grid lg:grid-cols-2 md:gap-8 xl:max-w-[1250px]">
                    <div className="relative w-full max-w-[300px] h-[300px] sm:max-w-[400px] md:max-w-[600px] md:h-[400px]">
                        <Image alt="Lavanderia" src={'/lavanderia.png'} fill className="object-contain" />
                    </div>
                    <div className="flex flex-col gap-2 text-azul-medio bg-white p-4 max-w-[700px] md:p-8">
                        <div className="flex items-center gap-2 md:gap-4">
                            <h3 className="font-secundaria text-3xl font-black md:text-5xl">Sobre a <b className="font-cursiva text-4xl md:text-6xl">La Vida</b></h3>
                            <div className="relative w-8 h-8 mb-1 md:w-12 md:h-12">
                                <Image alt="logo" src={'/logo-la-vida.png'} fill className="object-contain" />
                            </div>
                        </div>
                        <p className="text-xl">Lavamos suas roupas com cuidado e entregamos praticidade no seu dia a dia.</p>
                        <p className="text-xl">
                            Lave ou seque suas roupas de forma prática, rápida e econômica! Nossos serviços custam entre R$20 e R$30, dependendo da unidade e da quantidade de peças. Você poderá escolher entre as marcas de sabão em pó Omo e Brilhante e as marcas de amaciante Downy, Fofo e Confort, ajustando a quantidade de produto com nosso cesto medidor para garantir uma experiência perfeita para suas roupas.
                        </p>
                    </div>
                </div>
            </div>
            <Onda invertido={false} />
        </>
    )
}