import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import useAuth from "@/data/hooks/useAuth";
import Preferencias from "@/lib/interfaces/Preferencias";
import { db } from "@/lib/firebase/firebase";


export function usePreferencias() {
    const { usuario } = useAuth()
    const [preferencias, setPreferencias] = useState<Preferencias | null>(null)

    useEffect(() => {
        if (!usuario) return

        const usuarioRef = doc(db, "usuarios", usuario.uid)
        const unsubscribe = onSnapshot(usuarioRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data()
                setPreferencias(data.preferencias || null)
            }
        })

        return () => unsubscribe()
    }, [usuario])

    return preferencias
}
