import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST() {
  const preference = new Preference(client);

  const result = await preference.create({
    body: {
      items: [
        {
          id: "lavagem-roupas",
          title: "Lavagem de roupas",
          quantity: 1,
          currency_id: "BRL",
          unit_price: 20.0,
        },
      ],
    },
  });

  return Response.json({ id: result.id });
}
