import Formulario from "@/components/formularioInterativo/Formulario";
import Template from "@/components/template/Template";

export default function Page() {
    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center items-center pt-[64px] pb-[100px] -mb-16 lg:-mb-24">
                <Formulario />
            </div>
        </Template>
    )
}