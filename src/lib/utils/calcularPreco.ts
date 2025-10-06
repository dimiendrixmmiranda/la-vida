import ListaDePecas from "../interfaces/ListaDePecas";

export default function calcularPreco(form: ListaDePecas) {
    // Tabela de preços por unidade
    const precos = {
        camisas: 5,
        calca: 7,
        vestido: 10,
        terno: 20,
        toalha: 4,
        roupaDeCama: 8,
        blusaMoletomSueter: 9,
        jaquetaCasaco: 12,
        shorts: 6,
        roupasIntimas: 3,
        meias: 2
    };

    // Cálculo do total e do detalhamento
    let total = 0;
    const detalhamento: Record<string, number> = {};

    for (const [chave, preco] of Object.entries(precos)) {
        const quantidade = Number(form[chave as keyof ListaDePecas]) || 0;
        const subtotal = quantidade * preco;
        detalhamento[chave] = subtotal;
        total += subtotal;
    }

    return { total, detalhamento };
}
