import { Timestamp } from "firebase/firestore"
import Endereco from "./Endereco"
import ListaDePecas from "./ListaDePecas"
import Preferencias from "./Preferencias"
import { PrecoPedido } from "./PrecoPedido"

export default interface PedidoUsuario{
    condicoesDasPecas: string
    dataAtualização: Timestamp
    dataCriacao: Timestamp
    emailUsuario: string
    endereco: Endereco
    nomeUsuario: string
    observacoes: string
    pecas: ListaDePecas
    preferencias: Preferencias
    servicoDesejado: string
    status: string
    usuarioId: string
    id: string
    metodoDePagamento: string
    totalAPagar: PrecoPedido
}