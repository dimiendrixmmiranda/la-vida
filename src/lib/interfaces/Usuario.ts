import { Timestamp } from "firebase/firestore"
import Endereco from "./Endereco"

export type Usuario = {
    uid: string
    email: string
    nome: string
    token: string
    provedor: string
    imagemURL: string
    sexo: string
    telefone: string
    endereco: Endereco | null
    dataNascimento?: string | Timestamp
}