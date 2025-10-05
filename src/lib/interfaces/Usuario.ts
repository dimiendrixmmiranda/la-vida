import { Timestamp } from "firebase/firestore"
import Preferencias from "./Preferencias"

export type Usuario = {
    uid: string
    email: string
    nome: string
    token: string
    provedor: string
    imagemURL: string
    sexo: string
    telefone: string
    dataNascimento?: string | Timestamp
    enderecoPrincipalId: string
    preferencias: Preferencias
    tipo: string
}