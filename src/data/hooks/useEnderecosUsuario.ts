import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import useAuth from "@/data/hooks/useAuth";
import Endereco from "@/lib/interfaces/Endereco";
import { db } from "@/lib/firebase/firebase";

export function useEnderecos() {
    const { usuario } = useAuth();
    const [enderecos, setEnderecos] = useState<Endereco[]>([]);

    useEffect(() => {
        if (!usuario) return;

        const unsubscribe = onSnapshot(
            collection(db, "usuarios", usuario.uid, "enderecos"),
            (snapshot) => {
                const lista = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Endereco[];
                setEnderecos(lista);
            }
        );

        return () => unsubscribe();
    }, [usuario]);

    return enderecos;
}
