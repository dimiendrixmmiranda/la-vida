'use client'
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";
import Template from "@/components/template/Template";
import useAuth from "@/data/hooks/useAuth";
import { usePedidosAdministrador } from "@/data/hooks/usePedidosAdministrador";
import { db } from "@/lib/firebase/firebase";
import PedidoAdministrador from "@/lib/interfaces/PedidoAdministrador";
import formatarData from "@/lib/utils/formatarData";
import { doc, updateDoc } from "firebase/firestore";
import { Dialog } from 'primereact/dialog';
import { useState } from "react";

export default function Page() {
    const { logout } = useAuth()
    const { pedidosAdministrador } = usePedidosAdministrador()
    const [pedidoAtual, setPedidoAtual] = useState<PedidoAdministrador | null>(null)
    const [visible, setVisible] = useState(false);
    const [visibleStatus, setVisibleStatus] = useState(false);
    const statusOptions = ['Em Lavagem', 'Pronto para Entrega/Coleta', 'Pedido Recebido', 'Entregue'];


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
        <RotaProtegida permitido="administrador">
            <Template ondaInvertida={true}>
                <div className="min-h-screen bg-azul flex flex-col justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                    <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1400px] mx-auto lg:gap-8 xl:gap-10">
                        <h3 className="uppercase font-black text-3xl leading-8" style={{ textShadow: '1px 1px 2px black' }}>Pedidos:</h3>
                        <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
                            {
                                pedidosAdministrador.map((pedido) => {
                                    return (
                                        <li key={pedido.id} className="bg-azul-escuro p-4 flex flex-col gap-4 lg:p-6">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-bold truncate max-w-[70%]">{pedido.id}</h3>
                                                <span className={`capitalize whitespace-nowrap px-2 py-1 rounded text-sm font-semibold text-white ${pedido.status === 'Pronto para Entrega/Coleta' ? 'bg-green-600' : ''} ${pedido.status === 'em lavagem' ? 'bg-blue-600' : ''}`}>
                                                    {pedido.status}
                                                </span>
                                            </div>
                                            <div>
                                                <p>Nome do cliente: {pedido.nomeUsuario}</p>
                                                <p>Data do pedido: {formatarData(pedido.dataCriacao)}</p>
                                                <p>Situação: {pedido.status}</p>
                                                <p>Email: {pedido.emailUsuario}</p>
                                                <p>Serviço Desejado: {pedido.servicoDesejado}</p>
                                            </div>
                                            <div className="flex flex-col sm:grid grid-cols-2 gap-2">
                                                <button
                                                className="bg-amarelo p-2 uppercase font-bold"
                                                    onClick={() => {
                                                        setVisible(true)
                                                        setPedidoAtual(pedido)
                                                    }}
                                                >
                                                    Detalhes
                                                </button>
                                                <button
                                                className="bg-blue-700 p-2 uppercase font-bold"
                                                    onClick={() => {
                                                        setVisibleStatus(true)
                                                        setPedidoAtual(pedido)
                                                    }}
                                                >
                                                    Alterar Status
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="uppercase font-bold text-2xl text-center bg-red-600 p-2" onClick={() => logout && logout('/')}>sair</button>
                    </div>
                    {/* dialog de detalhes */}
                    <Dialog header={`Pedido ${pedidoAtual?.id}`} visible={visible} onHide={() => { if (!visible) return; setVisible(false); }} className="w-full max-w-[95%]">
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