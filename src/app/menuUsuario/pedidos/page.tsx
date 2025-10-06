"use client"

import Template from "@/components/template/Template"
import React, { useEffect, useState } from "react";
import { Dialog } from 'primereact/dialog';
import Botao from "@/components/botao/Botao";
import { IoMdReturnLeft } from "react-icons/io";
import { usePedidosUsuario } from "@/data/hooks/usePedidosUsuario";
import PedidoUsuario from "@/lib/interfaces/PedidoUsuario";
import formatarData from "@/lib/utils/formatarData";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export default function Page() {
    const [visible, setVisible] = useState(false);
    const [pedidoAtual, setPedidoAtual] = useState<PedidoUsuario | null>(null)
    const pedidos = usePedidosUsuario()
    const statusOptions = ['Pedido Recebido', 'Entregue'];
    const [visibleStatus, setVisibleStatus] = useState(false);
    const [pedidosConcluidos, setPedidosConcluidos] = useState<PedidoUsuario[] | null>(null)
    const [pedidosEmAberto, setPedidosEmAberto] = useState<PedidoUsuario[] | null>(null)
    console.log(pedidosEmAberto)
    console.log(pedidosConcluidos)
    useEffect(() => {
        const pedidosConcluidos = pedidos.filter(pedido => pedido.status == "Pedido Recebido" || pedido.status == "Entregue")
        setPedidosConcluidos(pedidosConcluidos)
        const pedidosEmAberto = pedidos.filter(pedido => pedido.status !== "Pedido Recebido" && pedido.status !== "Entregue")
        setPedidosEmAberto(pedidosEmAberto)
    }, [pedidos])

    async function alterarStatus(pedidoId: string, novoStatus: string, usuarioId: string) {
        try {
            const pedidoRef = doc(db, "pedidos", pedidoId)
            await updateDoc(pedidoRef, { status: novoStatus })

            const pedidoRefUsuario = doc(db, "usuarios", usuarioId, "pedidos", pedidoId)
            await updateDoc(pedidoRefUsuario, { status: novoStatus })

            console.log(`Status do pedido ${pedidoId} atualizado para ${novoStatus}`)
            return true
        } catch (error) {
            console.error("Erro ao alterar status:", error)
            return false
        }
    }

    return (
        <RotaProtegida permitido="usuario">
            <Template ondaInvertida={true}>
                <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                    <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1400px] lg:gap-8 xl:gap-10">
                        {
                            pedidosEmAberto != null && pedidosEmAberto.length > 0 ? (
                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Pedidos em Aberto</h2>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        {
                                            pedidosEmAberto.map((pedido) => {
                                                return (
                                                    <div key={pedido.id} className="bg-white text-black rounded-2xl shadow-md p-4 flex flex-col gap-2 w-full">
                                                        <div className="flex justify-between items-center">
                                                            <h3 className="font-bold truncate max-w-[70%]">{pedido.id}</h3>
                                                            <span className={`capitalize whitespace-nowrap px-2 py-1 rounded text-sm font-semibold text-white ${pedido.status === 'Pronto para Entrega/Coleta' ? 'bg-green-600' : ''} ${pedido.status === 'em lavagem' ? 'bg-blue-600' : ''}`}>
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
                                                        <p className="uppercase"><strong className="capitalize">Método de pagamento:</strong> {pedido.metodoDePagamento}</p>
                                                        <p className="font-bold text-lg"><strong>Total: </strong>R${pedido.totalAPagar.total.toFixed(2)}</p>
                                                        <div>
                                                            <h3 className="font-bold">Observações:</h3>
                                                            <p className="line-clamp-3">{pedido.observacoes}</p>
                                                        </div>
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
                                                            <button
                                                                onClick={() => {
                                                                    setVisibleStatus(true)
                                                                    setPedidoAtual(pedido)
                                                                }}
                                                                className="bg-green-600 text-white rounded-lg px-3 py-2 transition leading-5"
                                                                style={{ textShadow: '1px 1px 2px black', boxShadow: '0px 0px 2px 1px black' }}
                                                            >
                                                                Confirmar Retirada
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </section>
                            ) : (
                                <h2 className="uppercase font-bold text-xl">Nenhum pedido Em Aberto</h2>
                            )
                        }
                        {/* #Concluídos */}
                        {
                            pedidosConcluidos != null && pedidosConcluidos.length > 0 ? (
                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Pedidos Concluídos</h2>
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        {pedidosConcluidos.map((pedido) => {
                                            console.log(pedido)
                                            return (
                                                <div key={pedido.id} className="bg-green-500 text-white rounded-2xl shadow-md p-4 flex flex-col gap-2 opacity-80" style={{ textShadow: '1px 1px 2px black' }}>
                                                    <div className="flex justify-between items-center">
                                                        <h3 className="font-bold max-w-[80%] truncate">{pedido.id}</h3>
                                                        <span className="px-2 py-1 rounded text-sm font-semibold bg-green-300 text-white">
                                                            {pedido.status}
                                                        </span>
                                                    </div>
                                                    <p><strong>Serviço:</strong> {pedido.servicoDesejado}</p>
                                                    <p className="truncate">
                                                        <strong>Itens:</strong>{" "}
                                                        {Object.entries(pedido.pecas)
                                                            .filter(([, valor]) => valor && valor !== "0")
                                                            .map(([chave, valor]) => `${valor} ${chave}`)
                                                            .join(", ")}
                                                    </p>
                                                    <p><strong>Condições das peças:</strong> {pedido.condicoesDasPecas}</p>
                                                    <p className="uppercase"><strong className="capitalize">Método de pagamento:</strong> {pedido.metodoDePagamento}</p>
                                                    <p className="font-bold text-lg"><strong>Total: </strong>R${pedido.totalAPagar.total.toFixed(2)}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </section>
                            ) : (
                                <h2>nenhum pedido concluido</h2>
                            )
                        }

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

                    {/* dialog de status */}
                    <Dialog header={`Alterar Status`} visible={visibleStatus} onHide={() => setVisibleStatus(false)} className="w-full max-w-[95%] md:max-w-[700px]">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="status">Selecione o novo status:</label>
                            <select
                                id="status"
                                value={pedidoAtual?.status || ''}
                                onChange={(e) => setPedidoAtual(prev => prev ? { ...prev, status: e.target.value } : prev)}
                                className="p-2 text-black rounded"
                            >
                                {statusOptions.map(status => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                            <button
                                className="mt-2 bg-green-500 p-2 rounded"
                                onClick={async () => {
                                    if (pedidoAtual) {
                                        const sucesso = await alterarStatus(pedidoAtual.id, pedidoAtual.status, pedidoAtual.usuarioId);
                                        if (sucesso) {
                                            alert("Status atualizado!");
                                            setVisibleStatus(false);
                                            // Aqui você pode atualizar a lista local, se estiver usando um state
                                        } else {
                                            alert("Falha ao atualizar status.");
                                        }
                                    }
                                }}
                            >
                                Salvar
                            </button>
                        </div>
                    </Dialog>
                </div>
            </Template>
        </RotaProtegida>
    )
}