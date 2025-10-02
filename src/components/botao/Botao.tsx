import Link from "next/link";

interface BotaoProps {
    link: string
    icone: React.ReactElement
    texto: string
    cor: string
    botao?: boolean
    funcao?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Botao({ link, icone, texto, cor, botao = false, funcao }: BotaoProps) {
    return botao ? (
        <button
            className={`${cor} text-center uppercase font-bold text-lg w-full h-full p-2 flex justify-center items-center gap-2`}
            style={{ boxShadow: '0px 0px 2px 1px black', textShadow: '1px 1px 2px black' }}
            onClick={(e) => funcao && funcao(e)}
        >
            {icone}
            <p>{texto}</p>
        </button>
    ) : (
        <Link
            href={link}
            className={`${cor} text-center uppercase font-bold text-lg w-full h-full p-2 flex justify-center items-center gap-2`}
            style={{ boxShadow: '0px 0px 2px 1px black', textShadow: '1px 1px 2px black' }}
        >
            {icone}
            <p>{texto}</p>
        </Link>
    );
}