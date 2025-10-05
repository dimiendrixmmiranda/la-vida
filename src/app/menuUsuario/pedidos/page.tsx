"use client"

import Template from "@/components/template/Template"
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import Botao from "@/components/botao/Botao";
import { IoMdReturnLeft } from "react-icons/io";
import { usePedidosUsuario } from "@/data/hooks/usePedidosUsuario";
import PedidoUsuario from "@/lib/interfaces/PedidoUsuario";
import formatarData from "@/lib/utils/formatarData";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";

export default function Page() {
    const [visible, setVisible] = useState(false);
    const [pedidoAtual, setPedidoAtual] = useState<PedidoUsuario | null>(null)
    const pedidos = usePedidosUsuario()

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
        <RotaProtegida permitido="usuario">
            <Template ondaInvertida={true}>
                <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                    <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1400px] lg:gap-8 xl:gap-10">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Pedidos em Aberto</h2>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    pedidos.length > 0 ? (
                                        pedidos.map((pedido) => {
                                            console.log(pedido.status)
                                            return (
                                                <div key={pedido.id} className="bg-white text-black rounded-2xl shadow-md p-4 flex flex-col gap-2 w-full">
                                                    <div className="flex justify-between items-center">
                                                        <h3 className="font-bold truncate max-w-[70%]">{pedido.id}</h3>
                                                        <span className={`capitalize whitespace-nowrap px-2 py-1 rounded text-sm font-semibold text-white ${pedido.status === 'Pronto para Entrega/Coleta' ? 'bg-green-600': ''} ${pedido.status === 'em lavagem' ? 'bg-blue-600': ''}`}>
                                                            {pedido.status}
                                                        </span>
                                                    </div>
                                                    <p><strong>Data da Criação:</strong> {formatarData(pedido.dataCriacao)}</p>
                                                    <p><strong>Condições das peças:</strong> {pedido.condicoesDasPecas}</p>
                                                    <p className="truncate">
                                                        <strong>Itens:</strong>{" "}
                                                        {Object.entries(pedido.pecas)
                                                            .filter(([, valor]) => valor && valor !== "0")
                                                            .map(([chave, valor]) => `${valor} ${chave}`)
                                                            .join(", ")}
                                                    </p>
                                                    <p><strong>Serviço:</strong> {pedido.servicoDesejado}</p>
                                                    <div>
                                                        <h3 className="font-bold">Observações:</h3>
                                                        <p className="line-clamp-3">{pedido.observacoes}</p>
                                                    </div>
                                                    <p className="font-bold text-lg"><strong>Total: </strong>R$49,90</p>
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
                                            )
                                        })
                                    ) : (
                                        <h2 className="uppercase font-bold text-xl">Nenhum pedido realizado!</h2>
                                    )
                                }

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
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl font-bold">Detalhes:</h2>
                                <p><strong>Nome:</strong> {pedidoAtual?.nomeUsuario}</p>
                                <p><strong>Email:</strong> {pedidoAtual?.emailUsuario}</p>
                                <p><strong>Condições das peças:</strong> {pedidoAtual?.condicoesDasPecas}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl font-bold">Itens:</h2>
                                <p>
                                    <strong>Itens:</strong>{" "}
                                    {
                                        pedidoAtual?.pecas && Object.entries(pedidoAtual?.pecas)
                                            .filter(([, valor]) => valor && valor !== "0")
                                            .map(([chave, valor]) => `${valor} ${chave}`)
                                            .join(", ")
                                    }
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl font-bold">Preferências:</h2>
                                <div className="flex flex-col md:grid md:grid-cols-2">
                                    {pedidoAtual?.preferencias && Object.entries(pedidoAtual.preferencias).map(([chave, valor]) => (
                                        <p key={chave}>{chave}: {valor}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl font-bold">Endereço:</h2>
                                <div>
                                    <h3>{pedidoAtual?.endereco?.rua}, {pedidoAtual?.endereco?.numero}</h3>
                                    <span className="flex leading-5">{pedidoAtual?.endereco?.bairro} - {pedidoAtual?.endereco?.complemento} - {pedidoAtual?.endereco?.cep} - {pedidoAtual?.endereco?.cidade} - {pedidoAtual?.endereco?.pontoDeReferencia}</span>
                                    <p className="flex leading-5">{pedidoAtual?.endereco?.nomeEndereco} - {pedidoAtual?.endereco?.nome}</p>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </Template>
        </RotaProtegida>
    )
}