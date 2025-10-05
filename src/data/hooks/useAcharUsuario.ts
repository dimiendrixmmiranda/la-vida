"use client";

import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Usuario } from "@/lib/interfaces/Usuario";

export function useAcharUsuario(uid: string | undefined) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!uid) return;

        setLoading(true);
        const docRef = doc(db, "usuarios", uid);

        const unsubscribe = onSnapshot(
            docRef,
            (docSnap) => {
                if (docSnap.exists()) {
                    setUsuario(docSnap.data() as Usuario);
                } else {
                    setUsuario(null);
                    setError("Usuário não encontrado");
                }
                setLoading(false);
            },
            (err) => {
                console.error(err);
                setError("Erro ao buscar usuário");
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [uid]);

    return { usuario, loading, error };
}
