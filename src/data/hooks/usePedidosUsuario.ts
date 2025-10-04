import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import useAuth from "@/data/hooks/useAuth";
import { db } from "@/lib/firebase/firebase";
import PedidoUsuario from "@/lib/interfaces/PedidoUsuario";


export function usePedidosUsuario() {
    const { usuario } = useAuth()
    const [pedidosUsuario, setPedidosUsuario] = useState<PedidoUsuario[]>([])

    useEffect(() => {
        if (!usuario) return;

        const pedidosRef = collection(db, "usuarios", usuario.uid, "pedidos");

        const unsubscribe = onSnapshot(pedidosRef, (snapshot) => {
            const lista = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as PedidoUsuario[];
            const listaOrdenada = lista.sort((a, b) => b.dataCriacao.toDate().getTime() - a.dataCriacao.toDate().getTime());

            setPedidosUsuario(listaOrdenada);
        });

        return () => unsubscribe();
    }, [usuario]);

    return pedidosUsuario
}
