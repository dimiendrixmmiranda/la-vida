import FAQ from "@/components/faq/FAQ";
import Template from "@/components/template/Template";

export default function page() {
    return (
        <Template>
            <div className="min-h-screen bg-azul flex justify-center items-center pt-[64px] pb-[100px] -mb-24 lg:pb-[70px] lg:pt-[40px]">
                <FAQ telaInicial={false}/>
            </div>
        </Template>
    )
}