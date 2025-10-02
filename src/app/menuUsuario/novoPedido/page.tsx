'use client'
import Botao from "@/components/botao/Botao";
import Template from "@/components/template/Template";
import { useEffect, useState } from "react";
import { FaCogs } from "react-icons/fa";
import { FaCheckDouble, FaLocationDot } from "react-icons/fa6";
import { IoMdReturnLeft } from "react-icons/io";
import { Dialog } from 'primereact/dialog';
import { useEnderecos } from "@/data/hooks/useEnderecosUsuario";
import Endereco from "@/lib/interfaces/Endereco";
import useAuth from "@/data/hooks/useAuth";
import { usePreferencias } from "@/data/hooks/usePreferencias";

export default function Page() {
    const enderecos = useEnderecos()
    const { usuario } = useAuth()
    const preferencias = usePreferencias();

    const [enderecoPrincipal, setEnderecoPrincipal] = useState<Endereco | null>(null)


    const [camisas, setCamisas] = useState('0')
    const [calca, setCalca] = useState('0')
    const [vestido, setVestido] = useState('0')
    const [terno, setTerno] = useState('0')
    const [toalha, setToalha] = useState('0')
    const [roupaDeCama, setRoupaDeCama] = useState('0')
    const [blusaMoletomSueter, setBlusaMoletomSueter] = useState('0')
    const [jaquetaCasaco, setJaquetaCasaco] = useState('0')
    const [shorts, setShorts] = useState('0')
    const [roupasIntimas, setRoupasIntimas] = useState('0')
    const [meias, setMeias] = useState('0')
    const [servicoDesejado, setServicoDesejado] = useState('0')
    const [condicoesDasPecas, setCondicoesDasPecas] = useState('')
    const [observacoes, setObservacoes] = useState('')

    const [showDialog, setShowDialog] = useState(false);

    const handleConfirmClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowDialog(true);
    }

    useEffect(() => {
        const enderecoPrincipal = enderecos.filter(endereco => endereco.id === usuario?.enderecoPrincipalId)[0]
        setEnderecoPrincipal(enderecoPrincipal)
    }, [usuario, enderecos])

    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1100px] lg:gap-8 xl:gap-10">
                    <h2 className="uppercase text-3xl text-center xl:text-5xl">Faça seu pedido:</h2>
                    <form className="flex flex-col gap-2 lg:gap-6">
                        <fieldset className="flex flex-col gap-2 md:grid md:grid-cols-2 xl:grid-cols-3">
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="camisas">Camisas</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="camisas" id="camisas" value={camisas} onChange={(e) => setCamisas(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="calca">Calça</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="calca" id="calca" value={calca} onChange={(e) => setCalca(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="vestido">Vestido</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="vestido" id="vestido" value={vestido} onChange={(e) => setVestido(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="terno">Terno</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="terno" id="terno" value={terno} onChange={(e) => setTerno(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="toalha">Toalha</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="toalha" id="toalha" value={toalha} onChange={(e) => setToalha(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="roupaDeCama">Roupa de Cama</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="roupaDeCama" id="roupaDeCama" value={roupaDeCama} onChange={(e) => setRoupaDeCama(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="blusaMoletomSueter">Blusa Moletom ou Suéter</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="blusaMoletomSueter" id="blusaMoletomSueter" value={blusaMoletomSueter} onChange={(e) => setBlusaMoletomSueter(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="jaquetaCasaco">Jaqueta ou Casaco</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="jaquetaCasaco" id="jaquetaCasaco" value={jaquetaCasaco} onChange={(e) => setJaquetaCasaco(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="shorts">Shorts</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="shorts" id="shorts" value={shorts} onChange={(e) => setShorts(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="roupasIntimas">Roupas Íntimas</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="roupasIntimas" id="roupasIntimas" value={roupasIntimas} onChange={(e) => setRoupasIntimas(e.target.value)} />
                                <p>unidades</p>
                            </fieldset>
                            <fieldset className="flex items-center gap-2">
                                <label htmlFor="meias">Meias</label>
                                <input className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" name="meias" id="meias" value={meias} onChange={(e) => setMeias(e.target.value)} />
                                <p>pares</p>
                            </fieldset>
                        </fieldset>
                        <fieldset className="flex flex-col gap-2 md:grid md:grid-cols-2">
                            <fieldset className="flex flex-col gap-1">
                                <label className="md:text-xl" htmlFor="servicoDesejado">Serviço desejado:</label>
                                <select name="servicoDesejado" id="servicoDesejado" className="text-black h-[40px] p-2 md:text-lg"
                                    value={servicoDesejado} onChange={(e) => setServicoDesejado(e.target.value)}>
                                    <option className="h-[40px]" value="">Selecione</option>
                                    <option className="h-[40px]" value="lavagem-comum">Lavagem Comum</option>
                                    <option className="h-[40px]" value="lavagem-seco">Lavagem Seco</option>
                                    <option className="h-[40px]" value="passadoria">Passadoria</option>
                                    <option className="h-[40px]" value="higienizacao-especial">Higienizacão Especial</option>
                                </select>
                            </fieldset>
                            <fieldset className="flex flex-col gap-1">
                                <label className="md:text-xl" htmlFor="condicaoDaPeca">Condições das peças em geral:</label>
                                <select name="condicaoDaPeca" id="condicaoDaPeca" className="text-black h-[40px] p-2 md:text-lg"
                                    value={condicoesDasPecas} onChange={(e) => setCondicoesDasPecas(e.target.value)}>
                                    <option className="h-[40px]" value="">Selecione</option>
                                    <option className="h-[40px]" value="normal">Normal</option>
                                    <option className="h-[40px]" value="suja">Suja</option>
                                    <option className="h-[40px]" value="muito-suja">Muito Suja</option>
                                    <option className="h-[40px]" value="com-manchas">Com Manchas</option>
                                    <option className="h-[40px]" value="delicado">Delicado</option>
                                </select>
                            </fieldset>
                        </fieldset>
                        <fieldset className="flex flex-col gap-2">
                            <label htmlFor="observacoes" className="md:text-xl">Observações</label>
                            <textarea name="observacoes" id="observacoes" className="w-full h-[200px] text-black p-2" value={observacoes} onChange={(e) => setObservacoes(e.target.value)}></textarea>
                        </fieldset>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <Botao cor="bg-orange-500" texto="Voltar" icone={<IoMdReturnLeft className="text-lg" />} link="/usuario" />
                            <Botao cor="bg-orange-500" texto="Ver Preferências" icone={<FaCogs className="text-lg" />} link="/menuUsuario/preferencias" />
                            <Botao cor="bg-orange-500" texto="Ver Endereços" icone={<FaLocationDot className="text-lg" />} link="/menuUsuario/adicionarEndereco" />
                            <Botao botao={true} funcao={handleConfirmClick} cor="bg-green-500" texto="Confirmar Pedido" icone={<FaCheckDouble className="text-lg" />} link="/" />
                        </div>
                    </form>
                </div>
            </div>
            <Dialog header="Confirme seu pedido" visible={showDialog} onHide={() => setShowDialog(false)} modal>
                <div>
                    <h2>Informações do Pedido:</h2>
                    <ul>
                        <li>
                            <p>Camisas: <b>{camisas}</b></p>
                        </li>
                        <li>
                            <p>Calças: <b>{calca}</b></p>
                        </li>
                        <li>
                            <p>Vestidos: <b>{vestido}</b></p>
                        </li>
                        <li>
                            <p>Terno: <b>{terno}</b></p>
                        </li>
                        <li>
                            <p>Toalha: <b>{toalha}</b></p>
                        </li>
                        <li>
                            <p>Blusa/Moletom/Sueter: <b>{blusaMoletomSueter}</b></p>
                        </li>
                        <li>
                            <p>Roupa de Cama: <b>{roupaDeCama}</b></p>
                        </li>
                        <li>
                            <p>Jaqueta/Casaco: <b>{jaquetaCasaco}</b></p>
                        </li>
                        <li>
                            <p>Shorts: <b>{shorts}</b></p>
                        </li>
                        <li>
                            <p>Roupas Íntimas: <b>{roupasIntimas}</b></p>
                        </li>
                        <li>
                            <p>Meias: <b>{meias}</b></p>
                        </li>
                        <li>
                            <p>Serviço Desejado: <b>{servicoDesejado}</b></p>
                        </li>
                        <li>
                            <p>Condições das Peças: <b>{condicoesDasPecas}</b></p>
                        </li>
                        <li>
                            <p>Observações: <b>{observacoes}</b></p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Endereço Principal Selecionado</h2>
                    <div>
                        <h2>{enderecoPrincipal?.rua}, {enderecoPrincipal?.numero}</h2>
                        <span className="flex leading-5">{enderecoPrincipal?.bairro} - {enderecoPrincipal?.complemento} - {enderecoPrincipal?.cep} - {enderecoPrincipal?.cidade} - {enderecoPrincipal?.pontoDeReferencia}</span>
                        <p className="flex leading-5">{enderecoPrincipal?.nomeEndereco} - {enderecoPrincipal?.nome}</p>
                    </div>
                    {/* botao de ancora para endereços */}
                </div>
                <div>
                    {preferencias &&
                        Object.entries(preferencias).map(([chave, valor]) => (
                            <p key={chave}>{chave}: {valor}</p>
                        ))
                    }
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <button onClick={() => setShowDialog(false)}>Revisar Pedido</button>
                    <button >Confirmar Pedido</button>
                </div>
            </Dialog>
        </Template >
    )
}