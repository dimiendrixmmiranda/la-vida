import Image from "next/image";

export default function Servicos() {
    return (
        <div className="min-h-screen bg-azul-medio p-4 flex justify-center items-center">
            <div className="flex flex-col justify-center gap-4 text-white max-w-[1300px] mx-auto w-full lg:p-8 lg:gap-8">
                <h3 className="text-3xl font-semibold leading-[1.3em] text-center text-white md:text-5xl md:leading-[1.3em]">Confira nossos <b className="font-black">Serviços!</b></h3>
                <p className="text-center md:text-lg lg:text-xl xl:text-2xl">
                    Lave e seque suas roupas em cerca de 1 hora com nossas máquinas modernas, que garantem qualidade e preservação dos tecidos, deixando tudo impecável. Se preferir, também oferecemos serviço completo: nós lavamos, secamos, passamos e ainda retiramos e entregamos suas roupas, com o tempo do serviço variando conforme a quantidade de peças.
                </p>
                <ul className="flex flex-col gap-4 md:grid md:grid-cols-3">
                    <li className="flex flex-col gap-4 items-center bg-white text-azul-medio p-4 xl:p-6">
                        <div className="w-[230px] h-[230px] relative md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
                            <Image alt="maquina" src={'/maquina.png'} fill className="object-contain" />
                        </div>
                        <h3 className="uppercase font-bold text-center text-2xl leading-7 md:text-3xl">Lavagem, Secagem e Passagem</h3>
                        <p className="text-lg text-center lg:text-xl">Lave e seque suas roupas rapidinho usando nossas maquinas modernas e secadores de alta performace. Se preferir fazermos isso por você!</p>
                    </li>
                    <li className="flex flex-col gap-4 items-center bg-white text-azul-medio p-4 xl:p-6">
                        <div className="w-[230px] h-[230px] relative md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
                            <Image alt="maquina" src={'/sabao-amaciante.png'} fill className="object-contain" />
                        </div>							<h3 className="uppercase font-bold text-center text-2xl leading-7 md:text-3xl">Produtos de Qualidade</h3>
                        <p className="text-lg text-center lg:text-xl">Utilizamos somente produtos de qualidade como sabão em pó da Omo e Brilhante além de amaciantes das marcas Downy, Fofo e Confort.</p>
                    </li>
                    <li className="flex flex-col gap-4 items-center bg-white text-azul-medio p-4 xl:p-6">
                        <div className="w-[230px] h-[230px] relative md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
                            <Image alt="maquina" src={'/qualidade-e-praticidade.png'} fill className="object-contain" />
                        </div>								<h3 className="uppercase font-bold text-center text-2xl leading-7 md:text-3xl">Qualidade e Praticidade</h3>
                        <p className="text-lg text-center lg:text-xl">Serviços rápidos e eficientes, cuidando das suas roupas com todo o carinho e atenção que elas merecem.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}