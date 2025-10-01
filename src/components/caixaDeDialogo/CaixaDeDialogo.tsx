interface CaixaDeDialogoProps {
    frase: string,
    visibleDialogo: boolean
    funcaoSim: (valor?: string) => void
    funcaoNao: (valor?: string) => void
}

export default function CaixaDeDialogo({ frase, visibleDialogo, funcaoSim, funcaoNao }: CaixaDeDialogoProps) {
    return (
        <div className={`fixed top-[40%] left-[50%] w-[300px] bg-azul-escuro text-white rounded-lgs flex-col gap-6 p-4 ${visibleDialogo ? 'flex' : 'hidden'}`} style={{ transform: 'translate(-50%,-50%)' }}>
            <p className="text-2xl uppercase font-bold leading-7">{frase}</p>
            <div className="grid grid-cols-2 gap-4">
                <button onClick={() => funcaoSim()} className="bg-green-600 uppercase font-bold text-lg">Sim</button>
                <button className="bg-red-600 uppercase font-bold text-lg" onClick={() => funcaoNao()}>Não</button>
            </div>
        </div>
    )
}