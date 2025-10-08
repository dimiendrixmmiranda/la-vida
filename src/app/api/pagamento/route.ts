import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { totalAPagar } = body;

        const preference = new Preference(client);
        const result = await preference.create({
            body: {
                items: [
                    {
                        id: "pedido-lavanderia",
                        title: "Serviço de Lavanderia",
                        quantity: 1,
                        currency_id: "BRL",
                        unit_price: Number(totalAPagar?.total ?? 0),
                    },
                ],
                back_urls: {
                    success: `${process.env.NEXT_PUBLIC_URL}/pagamento/sucesso`,
                    failure: `${process.env.NEXT_PUBLIC_URL}/pagamento/falha`,
                    pending: `${process.env.NEXT_PUBLIC_URL}/pagamento/pendente`,
                },
                auto_return: "approved",

            },
        });

        return NextResponse.json({ id: result.id });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Erro ao criar pagamento" }, { status: 500 });
    }
}
