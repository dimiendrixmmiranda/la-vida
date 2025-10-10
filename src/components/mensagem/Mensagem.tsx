'use client'

import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";

interface MensagemProps {
    mensagem: string;
    visible: boolean;
    tipo?: "sucesso" | "erro" | "info";
    onClose?: () => void; // opcional: função pra fechar automaticamente
    duracao?: number; // tempo em ms (ex: 3000)
}

export default function Mensagem({
    mensagem,
    visible,
    tipo = "info",
    onClose,
    duracao = 3000
}: MensagemProps) {

    useEffect(() => {
        if (visible && onClose) {
            const timer = setTimeout(() => onClose(), duracao);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose, duracao]);

    const cores = {
        sucesso: "bg-green-600",
        erro: "bg-red-600",
        info: "bg-blue-600",
    };

    const icones = {
        sucesso: <FaCheckCircle className="text-3xl mr-2" />,
        erro: <FaExclamationCircle className="text-3xl mr-2" />,
        info: <FaInfoCircle className="text-3xl mr-2" />,
    };

    return (
        <div
            className={`fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
                w-[300px] flex flex-col items-center justify-center text-center text-white
                p-4 rounded-xl shadow-xl transition-all duration-300 z-50
                ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
                ${cores[tipo]}
            `}
        >
            <div className="flex items-center mb-2">{icones[tipo]} <h2 className="text-xl font-bold">{mensagem}</h2></div>
            {onClose && (
                <button
                    onClick={onClose}
                    className="mt-2 bg-white/20 hover:bg-white/30 px-4 py-1 rounded-md text-sm font-semibold"
                >
                    Fechar
                </button>
            )}
        </div>
    );
}
