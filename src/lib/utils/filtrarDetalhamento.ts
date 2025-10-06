export function filtrarDetalhamento(detalhamento: Record<string, number>) {
    const filtrado: Record<string, number> = {};

    for (const [chave, valor] of Object.entries(detalhamento)) {
        if (valor !== 0) {
            filtrado[chave] = valor;
        }
    }

    return filtrado;
}
