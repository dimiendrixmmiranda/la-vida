"use client";

import Link from "next/link";

export default function PagamentoPendente() {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center">
			<h1 className="text-3xl font-bold text-yellow-600">🕐 Pagamento Pendente</h1>
			<p className="mt-4 text-lg text-gray-700">
				Seu pagamento ainda está sendo processado. Você receberá uma confirmação em breve.
			</p>
			<Link href={'/'} className="mt-6 text-blue-500 underline">
				Voltar para a página inicial
			</Link>
		</div>
	);
}