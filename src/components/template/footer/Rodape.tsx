import Onda from "@/components/onda/Onda";

export default function Rodape() {
    return (
        <>
            <Onda invertido={true} />
            <footer className="bg-azul-medio flex justify-center items-center text-white">
                Desenvolvido por Dimi Endrix Martins Miranda
            </footer>
        </>
    )
}