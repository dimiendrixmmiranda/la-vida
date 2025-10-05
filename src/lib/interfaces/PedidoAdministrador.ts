import { Timestamp } from "firebase/firestore"
import Endereco from "./Endereco"
import ListaDePecas from "./ListaDePecas"
import Preferencias from "./Preferencias"

export default interface PedidoAdministrador {
    condicoesDasPecas: string
    dataAtualizacao: Timestamp
    dataCriacao: Timestamp
    emailUsuario: string
    endereco: Endereco
    id: string
    nomeUsuario: string
    observacoes: string
    pecas: ListaDePecas
    preferencias: Preferencias
    servicoDesejado: string
    status: string
    usuarioId: string
}