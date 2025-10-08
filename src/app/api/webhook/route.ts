import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    console.log("🔔 Webhook recebido:", body);

    // Aqui você pode salvar no banco o status do pagamento:
    // ex: body.data.id => ID do pagamento

    return NextResponse.json({ status: "ok" });
}
