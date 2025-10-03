import Rodape from "./footer/Rodape";
import Cabecalho from "./header/Cabecalho";
import Main from "./main/Main";
interface TemplateProps {
    children: React.ReactNode
    ondaInvertida: boolean
    paginaHome?: boolean
}
export default function Template({children, ondaInvertida, paginaHome = false}:TemplateProps){
    return (
        <>
            <Cabecalho paginaHome={paginaHome}/>
            <Main>
                {
                    children
                }
            </Main>
            <Rodape ondaInvertida={ondaInvertida} />
        </>
    )
}