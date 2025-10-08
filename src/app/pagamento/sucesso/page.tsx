"use client";

import Link from "next/link";

export default function PagamentoSucesso() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-3xl font-bold text-green-600">✅ Pagamento Aprovado!</h1>
            <p className="mt-4 text-lg text-gray-700">
                Seu pagamento foi confirmado com sucesso. Obrigado pela compra!
            </p>
            <Link href={'/'} className="mt-6 text-blue-500 underline">
                Voltar para a página inicial
            </Link>
        </div>
    );
}
