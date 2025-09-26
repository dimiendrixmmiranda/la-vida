import Template from "@/components/template/Template";
import React from "react";
import TelaInicial from "@/components/telaInicial/TelaInicial";
import SobreLaVida from "@/components/sobreLaVida/SobreLaVida";
import Vantagens from "@/components/vantagens/Vantagens";
import Servicos from "@/components/servicos/Servicos";
import Fundadores from "@/components/fundadores/Fundadores";
import Contato from "@/components/contato/Contato";
import FAQ from "@/components/faq/FAQ";

export default async function Page() {
	return (
		<Template>
			<TelaInicial />
			<SobreLaVida />
			<Vantagens />
			<Servicos />
			<Fundadores />
			<Contato />
			<FAQ />
		</Template>
	)
}