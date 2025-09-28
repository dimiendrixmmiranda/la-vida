import { faq } from "@/lib/constants/faq"
import { Accordion, AccordionTab } from "primereact/accordion"

interface FAQProps {
    telaInicial: boolean
}

export default function FAQ({ telaInicial }: FAQProps) {
    return (
        <>
            <div className={`min-h-screen white p-4 flex flex-col justify-center items-center md:p-8 ${telaInicial ? 'faq': ''}`} id="faq">
                <div className="flex flex-col gap-6 w-full lg:gap-10">
                    <h3 className={`text-3xl font-black text-center lg:text-5xl ${telaInicial ? 'text-azul-medio': 'text-white'}`}>Perguntas Frequentes</h3>
                    <div className="card w-full max-w-[1200px] mx-auto 2xl:max-w-[1400px]">
                        <Accordion className="flex flex-col gap-2 md:grid md:grid-cols-2">
                            {
                                faq.map((pergunta, i) => {
                                    return (
                                        <AccordionTab header={pergunta.pergunta} key={i}>
                                            <p className="m-0">
                                                {pergunta.resposta}
                                            </p>
                                        </AccordionTab>
                                    )
                                })
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}