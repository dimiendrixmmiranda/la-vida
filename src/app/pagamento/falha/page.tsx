"use client";

import Link from "next/link";

export default function PagamentoFalha() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-3xl font-bold text-red-600">❌ Pagamento Recusado</h1>
            <p className="mt-4 text-lg text-gray-700">
                Seu pagamento não foi aprovado. Tente novamente ou use outro método.
            </p>
            <Link href={'/novoPedido'} className="mt-6 text-blue-500 underline">
                Voltar para o pedido
            </Link>
        </div>
    );
}
