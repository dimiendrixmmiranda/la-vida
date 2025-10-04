import { Timestamp } from "firebase/firestore";

export default function formatarData(data: Timestamp | null | undefined): string {
    if (!data) return ""

    try {
        const date = data.toDate()

        return date.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    } catch (err) {
        console.error("Erro ao formatar data:", err, data)
        return ""
    }
}
