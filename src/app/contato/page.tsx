import Contato from "@/components/contato/Contato";
import Template from "@/components/template/Template";

export default function Page() {
    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center items-center pt-[64px] pb-[100px] -mb-16 md:-mb-20 lg:pb-[70px] lg:pt-[40px] lg:-mb-24">
                <Contato telaInicial={false}/>
            </div>
        </Template>
    )
}