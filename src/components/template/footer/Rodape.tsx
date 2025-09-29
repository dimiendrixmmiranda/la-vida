import Onda from "@/components/onda/Onda";

interface RodapeProps {
    ondaInvertida: boolean
}

export default function Rodape({ ondaInvertida }: RodapeProps) {
    return (
        <>
            <Onda invertido={ondaInvertida} />
            <footer className="bg-azul-medio flex justify-center items-center text-center p-4 text-white">
                Desenvolvido por Dimi Endrix Martins Miranda
            </footer>
        </>
    )
}