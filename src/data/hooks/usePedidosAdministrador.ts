import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import PedidoAdministrador from "@/lib/interfaces/PedidoAdministrador";
import { db } from "@/lib/firebase/firebase";

export function usePedidosAdministrador() {
    const [pedidosAdministrador, setPedidosAdministrador] = useState<PedidoAdministrador[]>([]);

    useEffect(() => {
        const q = query(collection(db, "pedidos"), orderBy("dataCriacao", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const pedidos: PedidoAdministrador[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<PedidoAdministrador, "id">),
            }));
            setPedidosAdministrador(pedidos);
        });

        return () => unsubscribe(); // limpa listener quando componente desmonta
    }, []);

    return { pedidosAdministrador };
}
