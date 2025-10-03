import { Itens } from "./Itens";

export default interface Pedido {
    id: string,
    data: string,
    itens: Itens,
    servico: string,
    status: string,
    entrega: string,
    valor: string
}