'use client'
import Botao from "@/components/botao/Botao";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";
import Template from "@/components/template/Template";
import { tabelaDePrecos } from "@/lib/constants/tabelaDePrecos";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";

export default function Page() {
    return (
        <RotaProtegida permitido="usuario">
            <Template ondaInvertida={true}>
                <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                    <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1000px] xl:gap-8">
                        <h2 className="uppercase text-3xl text-center xl:text-5xl">Confira nossos preços:</h2>
                        <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
                            <thead className="bg-azul-escuro">
                                <tr>
                                    <th className="border px-4 py-2 text-left lg:text-lg">Tipo de Peça</th>
                                    <th className="border px-4 py-2 text-left lg:text-lg">Preço (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(tabelaDePrecos).map(([item, preco]) => (
                                    <tr
                                        key={item}
                                        className="border px-4 py-2 capitalize leading-5 lg:text-lg odd:bg-azul-medio-fraco even:bg-azul-medio"
                                    >
                                        <td className="border px-4 py-2 capitalize leading-5 lg:text-lg">
                                            {item.replace(/([A-Z])/g, " $1").toLowerCase()}
                                        </td>
                                        <td className="border px-4 py-2 leading-5 lg:text-lg">
                                            R$ {preco.toFixed(2)} à peça
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        <div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <Botao cor="bg-orange-500" texto="Voltar" icone={<IoMdReturnLeft className="text-lg" />} link="/" />
                                <Botao cor="bg-orange-500" texto="Realizar Pedido" icone={<FaPlusCircle className="text-lg" />} link="/menuUsuario/preferencias" />
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </RotaProtegida>
    )
}