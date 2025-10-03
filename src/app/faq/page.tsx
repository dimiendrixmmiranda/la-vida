import FAQ from "@/components/faq/FAQ";
import Template from "@/components/template/Template";

export default function page() {
    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center items-center pt-[64px] pb-[100px] -mb-16 md:-mb-20 lg:pb-[70px] lg:pt-[40px] lg:-mb-24">
                <FAQ telaInicial={false} />
            </div>
        </Template>
    )
}