import Rodape from "./footer/Rodape";
import Cabecalho from "./header/Cabecalho";
import Main from "./main/Main";
interface TemplateProps {
    children: React.ReactNode
}
export default function Template({children}:TemplateProps){
    return (
        <>
            <Cabecalho/>
            <Main>
                {
                    children
                }
            </Main>
            <Rodape/>
        </>
    )
}