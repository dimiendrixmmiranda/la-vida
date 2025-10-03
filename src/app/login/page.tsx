import Botao from "@/components/botao/Botao";
import Formulario from "@/components/formularioInterativo/Formulario";
import Template from "@/components/template/Template";
import { IoMdReturnLeft } from "react-icons/io";

export default function Page() {
    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex flex-col gap-4 p-4 justify-center items-center pt-[64px] pb-[100px] -mb-16 lg:-mb-24">
                <div className="flex flex-col gap-4 max-w-[1200px] md:gap-8">
                    <Formulario />
                    <div className="grid text-white ml-auto w-full lg:max-w-[300px]">
                        <Botao cor="bg-orange-500" texto="Voltar" icone={<IoMdReturnLeft className="text-lg" />} link="/" />
                    </div>
                </div>
            </div>
        </Template>
    )
}