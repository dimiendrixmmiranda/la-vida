"use client"

import Template from "@/components/template/Template"
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import Pedido from "@/lib/interfaces/Pedido";
import Botao from "@/components/botao/Botao";
import { IoMdReturnLeft } from "react-icons/io";

export default function Page() {
    const [visible, setVisible] = useState(false);
    const [pedidoAtual, setPedidoAtual] = useState<Pedido | null>(null)

    const pedidosEmAberto: Pedido[] = [
        {
            id: "#1234",
            data: "02/10/2025",
            itens: {
                camisas: "3",
                calca: "2",
                "blusa/moletom/sueter": "2",
                meias: "2",
                toalha: "2",
            },
            servico: "Lavagem + Passar",
            status: "Em Lavagem",
            entrega: "05/10/2025",
            valor: "R$ 45,00"
        },
        {
            id: "#1235",
            data: "01/10/2025",
            itens: {
                camisas: "3",
                calca: "2",
                "blusa/moletom/sueter": "2",
                meias: "2",
                toalha: "2",
            },
            servico: "Lavagem a Seco",
            status: "Pronto para Retirada",
            entrega: "03/10/2025",
            valor: "R$ 60,00"
        }
    ]

    const pedidosConcluidos = [
        {
            id: "#1229",
            data: "25/09/2025",
            itens: "5 camisas",
            servico: "Lavagem",
            status: "Concluído",
            entrega: "27/09/2025",
            valor: "R$ 35,00"
        }
    ]

    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1400px] lg:gap-8 xl:gap-10">
                    {/* PEDIDOS EM ABERTO */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Pedidos em Aberto</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {pedidosEmAberto.map((pedido) => (
                                <div key={pedido.id} className="bg-white text-black rounded-2xl shadow-md p-4 flex flex-col gap-2 w-full">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold">{pedido.id}</h3>
                                        <span className={`px-2 py-1 rounded text-sm font-semibold ${pedido.status === "Pronto para Retirada" ? "bg-green-200 text-green-800" :
                                            pedido.status === "Em Lavagem" ? "bg-yellow-200 text-yellow-800" :
                                                "bg-blue-200 text-blue-800"
                                            }`}>
                                            {pedido.status}
                                        </span>
                                    </div>
                                    <p><strong>Data:</strong> {pedido.data}</p>
                                    <p className="truncate">
                                        <strong>Itens:</strong>{" "}
                                        {Object.entries(pedido.itens)
                                            .filter(([, valor]) => valor && valor !== "0")
                                            .map(([chave, valor]) => `${valor} ${chave}`)
                                            .join(", ")}
                                    </p>
                                    <p><strong>Serviço:</strong> {pedido.servico}</p>
                                    <p><strong>Entrega:</strong> {pedido.entrega}</p>
                                    <p className="font-bold text-lg">{pedido.valor}</p>
                                    <div className="flex flex-col gap-2 xl:grid xl:grid-cols-3">
                                        <button onClick={() => {
                                            setVisible(true)
                                            setPedidoAtual(pedido)
                                        }} className="bg-azul text-white rounded-lg px-3 py-2 hover:bg-blue-800 transition leading-5">
                                            Detalhes
                                        </button>
                                        <button className="bg-red-600 text-white rounded-lg px-3 py-2 transition leading-5" style={{ textShadow: '1px 1px 2px black', boxShadow: '0px 0px 2px 1px black' }}>
                                            Cancelar Pedido
                                        </button>
                                        <button className="bg-green-600 text-white rounded-lg px-3 py-2 transition leading-5" style={{ textShadow: '1px 1px 2px black', boxShadow: '0px 0px 2px 1px black' }}>
                                            Confirmar Retirada
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PEDIDOS CONCLUÍDOS */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Pedidos Concluídos</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {pedidosConcluidos.map((pedido) => (
                                <div key={pedido.id} className="bg-green-500 text-white rounded-2xl shadow-md p-4 flex flex-col gap-2 opacity-80" style={{ textShadow: '1px 1px 2px black' }}>
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold">{pedido.id}</h3>
                                        <span className="px-2 py-1 rounded text-sm font-semibold bg-green-300 text-white">
                                            {pedido.status}
                                        </span>
                                    </div>
                                    <p><strong>Data:</strong> {pedido.data}</p>
                                    <p><strong>Itens:</strong> {pedido.itens}</p>
                                    <p><strong>Serviço:</strong> {pedido.servico}</p>
                                    <p><strong>Entrega:</strong> {pedido.entrega}</p>
                                    <p className="font-bold text-lg">{pedido.valor}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="max-w-[200px] ml-auto">
                        <Botao cor="bg-orange-500" texto="Voltar" icone={<IoMdReturnLeft className="text-lg" />} link="/usuario" />
                    </div>
                </div>
                <Dialog header={`Pedido ${pedidoAtual?.id}`} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                    <div>
                        <h2>{pedidoAtual?.valor}</h2>
                    </div>
                </Dialog>
            </div>
        </Template>
    )
}