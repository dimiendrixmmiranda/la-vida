import Rodape from "./footer/Rodape";
import Cabecalho from "./header/Cabecalho";
import Main from "./main/Main";
interface TemplateProps {
    children: React.ReactNode
    ondaInvertida: boolean
}
export default function Template({children, ondaInvertida}:TemplateProps){
    return (
        <>
            <Cabecalho/>
            <Main>
                {
                    children
                }
            </Main>
            <Rodape ondaInvertida={ondaInvertida} />
        </>
    )
}