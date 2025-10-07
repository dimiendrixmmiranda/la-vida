import { tabelaDePrecos } from "../constants/tabelaDePrecos";
import ListaDePecas from "../interfaces/ListaDePecas";

export default function calcularPreco(form: ListaDePecas) {
    // Cálculo do total e do detalhamento
    let total = 0;
    const detalhamento: Record<string, number> = {};

    for (const [chave, preco] of Object.entries(tabelaDePrecos)) {
        const quantidade = Number(form[chave as keyof ListaDePecas]) || 0;
        const subtotal = quantidade * preco;
        detalhamento[chave] = subtotal;
        total += subtotal;
    }

    return { total, detalhamento };
}
