"use client"
import Botao from "@/components/botao/Botao";
import Template from "@/components/template/Template";
import { useEffect, useRef, useState } from "react";
import { FaCogs } from "react-icons/fa";
import { FaCheckDouble, FaLocationDot } from "react-icons/fa6";
import { IoMdReturnLeft } from "react-icons/io";
import { Dialog } from 'primereact/dialog';
import { useEnderecos } from "@/data/hooks/useEnderecosUsuario";
import Endereco from "@/lib/interfaces/Endereco";
import useAuth from "@/data/hooks/useAuth";
import { usePreferencias } from "@/data/hooks/usePreferencias";
import { addDoc, collection, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import ListaDePecas from "@/lib/interfaces/ListaDePecas";
import { useRouter } from "next/navigation";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";

export default function Page() {
    const enderecos = useEnderecos()
    const { usuario } = useAuth()
    const preferencias = usePreferencias()
    const [enderecoPrincipal, setEnderecoPrincipal] = useState<Endereco | null>(null)
    const [showDialog, setShowDialog] = useState(false)
    const router = useRouter()

    const initialForm: ListaDePecas = {
        camisas: "0",
        calca: "0",
        vestido: "0",
        terno: "0",
        toalha: "0",
        roupaDeCama: "0",
        blusaMoletomSueter: "0",
        jaquetaCasaco: "0",
        shorts: "0",
        roupasIntimas: "0",
        meias: "0",
        servicoDesejado: "",
        condicoesDasPecas: "",
        observacoes: ""
    };

    const [form, setForm] = useState<ListaDePecas>(initialForm)

    const formRef = useRef<ListaDePecas>(form)
    useEffect(() => { formRef.current = form; }, [form])

    const storageKey = usuario?.uid ? `pedidoForm_${usuario.uid}` : "pedidoForm"

    useEffect(() => {
        try {
            const saved = localStorage.getItem(storageKey)
            if (saved) {
                const parsed = JSON.parse(saved)
                setForm(() => ({ ...initialForm, ...parsed }))
            }
        } catch (err) {
            console.error("Erro ao carregar pedido do localStorage:", err)
        }
    }, [storageKey])

    const saveToStorage = (newForm: ListaDePecas) => {
        try {
            localStorage.setItem(storageKey, JSON.stringify(newForm))
        } catch (err) {
            console.error("Erro ao salvar pedido no localStorage:", err)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        const newForm = { ...form, [name]: value }
        setForm(newForm)
        saveToStorage(newForm)
    }
    useEffect(() => {
        const onBeforeUnload = () => {
            try {
                localStorage.setItem(storageKey, JSON.stringify(formRef.current))
            } catch { }
        };
        window.addEventListener("beforeunload", onBeforeUnload)
        return () => window.removeEventListener("beforeunload", onBeforeUnload)
    }, [storageKey])

    useEffect(() => {
        const endereco = enderecos.find(end => end.id === usuario?.enderecoPrincipalId) ?? null
        setEnderecoPrincipal(endereco)
    }, [usuario, enderecos])

    const handleConfirmClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowDialog(true)
    }

    const handleFinalConfirm = async () => {
        if (!usuario) {
            alert("Usuário não autenticado.");
            return;
        }

        if (!enderecoPrincipal) {
            alert("Você precisa ter um endereço principal cadastrado.");
            return;
        }

        try {
            const pedidoBase = {
                usuarioId: usuario.uid,
                nomeUsuario: usuario.nome ?? "Usuário",
                emailUsuario: usuario.email,
                endereco: enderecoPrincipal,
                preferencias: preferencias || {},
                pecas: {
                    camisas: Number(form.camisas),
                    calca: Number(form.calca),
                    vestido: Number(form.vestido),
                    terno: Number(form.terno),
                    toalha: Number(form.toalha),
                    roupaDeCama: Number(form.roupaDeCama),
                    blusaMoletomSueter: Number(form.blusaMoletomSueter),
                    jaquetaCasaco: Number(form.jaquetaCasaco),
                    shorts: Number(form.shorts),
                    roupasIntimas: Number(form.roupasIntimas),
                    meias: Number(form.meias),
                },
                servicoDesejado: form.servicoDesejado,
                condicoesDasPecas: form.condicoesDasPecas,
                observacoes: form.observacoes,
                status: "em lavagem",
                dataCriacao: serverTimestamp(),
                dataAtualizacao: serverTimestamp(),
            };

            // cria o pedido na coleção geral
            const pedidoRef = await addDoc(collection(db, "pedidos"), pedidoBase);

            // adiciona o id ao mesmo pedido
            const pedidoComId = { ...pedidoBase, id: pedidoRef.id };
            await updateDoc(pedidoRef, { id: pedidoRef.id });

            // salva o mesmo pedido dentro do usuário (com id incluso)
            await setDoc(doc(db, "usuarios", usuario.uid, "pedidos", pedidoRef.id), pedidoComId);

            // limpa storage e form
            localStorage.removeItem(storageKey);
            setForm(initialForm);
            setShowDialog(false);

            alert("Pedido realizado com sucesso!");
            router.push('/menuUsuario/pedidos')
        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
            alert("Ocorreu um erro ao salvar o pedido. Tente novamente.");
        }
    };


    return (
        <RotaProtegida permitido="usuario">
            <Template ondaInvertida={true}>
                <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:pb-32 md:-mb-20 lg:-mb-24">
                    <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1100px] lg:gap-8 xl:gap-10">
                        <h2 className="uppercase text-3xl text-center xl:text-5xl">Faça seu pedido:</h2>
                        <form className="flex flex-col gap-2 lg:gap-6">
                            <fieldset className="flex flex-col gap-2 md:grid md:grid-cols-2 xl:grid-cols-3">
                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="camisas">Camisas</label>
                                    <input id="camisas" name="camisas" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.camisas} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="calca">Calça</label>
                                    <input id="calca" name="calca" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.calca} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="vestido">Vestido</label>
                                    <input id="vestido" name="vestido" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.vestido} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="terno">Terno</label>
                                    <input id="terno" name="terno" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.terno} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="toalha">Toalha</label>
                                    <input id="toalha" name="toalha" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.toalha} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="roupaDeCama">Roupa de Cama</label>
                                    <input id="roupaDeCama" name="roupaDeCama" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.roupaDeCama} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="blusaMoletomSueter">Blusa Moletom ou Suéter</label>
                                    <input id="blusaMoletomSueter" name="blusaMoletomSueter" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.blusaMoletomSueter} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="jaquetaCasaco">Jaqueta ou Casaco</label>
                                    <input id="jaquetaCasaco" name="jaquetaCasaco" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.jaquetaCasaco} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="shorts">Shorts</label>
                                    <input id="shorts" name="shorts" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.shorts} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="roupasIntimas">Roupas Íntimas</label>
                                    <input id="roupasIntimas" name="roupasIntimas" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.roupasIntimas} onChange={handleChange} />
                                    <p>unidades</p>
                                </fieldset>

                                <fieldset className="flex items-center gap-2">
                                    <label htmlFor="meias">Meias</label>
                                    <input id="meias" name="meias" className="w-[50px] text-black text-center" style={{ borderRadius: '6px' }} type="text" value={form.meias} onChange={handleChange} />
                                    <p>pares</p>
                                </fieldset>
                            </fieldset>

                            <fieldset className="flex flex-col gap-2 md:grid md:grid-cols-2">
                                <fieldset className="flex flex-col gap-1">
                                    <label className="md:text-xl" htmlFor="servicoDesejado">Serviço desejado:</label>
                                    <select name="servicoDesejado" id="servicoDesejado" className="text-black h-[40px] p-2 md:text-lg" value={form.servicoDesejado} onChange={handleChange}>
                                        <option value="">Selecione</option>
                                        <option value="lavagem-comum">Lavagem Comum</option>
                                        <option value="lavagem-seco">Lavagem Seco</option>
                                        <option value="passadoria">Passadoria</option>
                                        <option value="higienizacao-especial">Higienizacão Especial</option>
                                    </select>
                                </fieldset>

                                <fieldset className="flex flex-col gap-1">
                                    <label className="md:text-xl" htmlFor="condicoesDasPecas">Condições das peças em geral:</label>
                                    <select name="condicoesDasPecas" id="condicoesDasPecas" className="text-black h-[40px] p-2 md:text-lg" value={form.condicoesDasPecas} onChange={handleChange}>
                                        <option value="">Selecione</option>
                                        <option value="normal">Normal</option>
                                        <option value="suja">Suja</option>
                                        <option value="muito-suja">Muito Suja</option>
                                        <option value="com-manchas">Com Manchas</option>
                                        <option value="delicado">Delicado</option>
                                    </select>
                                </fieldset>
                            </fieldset>

                            <fieldset className="flex flex-col gap-2">
                                <label htmlFor="observacoes" className="md:text-xl">Observações</label>
                                <textarea id="observacoes" name="observacoes" className="w-full h-[200px] text-black p-2" value={form.observacoes} onChange={handleChange}></textarea>
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

                <Dialog header="Confirme seu pedido" visible={showDialog} onHide={() => setShowDialog(false)} modal className="max-w-[95%] w-full md:max-w-[700px]">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">Informações do Pedido:</h2>
                            <ul className="flex flex-col gap-1 md:grid md:grid-cols-2">
                                <li><p>Camisas: <b>{form.camisas}</b></p></li>
                                <li><p>Calças: <b>{form.calca}</b></p></li>
                                <li><p>Vestidos: <b>{form.vestido}</b></p></li>
                                <li><p>Terno: <b>{form.terno}</b></p></li>
                                <li><p>Toalha: <b>{form.toalha}</b></p></li>
                                <li><p>Roupa de Cama: <b>{form.roupaDeCama}</b></p></li>
                                <li><p>Blusa/Moletom/Sueter: <b>{form.blusaMoletomSueter}</b></p></li>
                                <li><p>Jaqueta/Casaco: <b>{form.jaquetaCasaco}</b></p></li>
                                <li><p>Shorts: <b>{form.shorts}</b></p></li>
                                <li><p>Roupas Íntimas: <b>{form.roupasIntimas}</b></p></li>
                                <li><p>Meias: <b>{form.meias}</b></p></li>
                                <li><p>Serviço Desejado: <b>{form.servicoDesejado}</b></p></li>
                                <li><p>Condições das Peças: <b>{form.condicoesDasPecas}</b></p></li>
                                <li><p>Observações: <b>{form.observacoes}</b></p></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">Endereço Principal Selecionado:</h2>
                            <div>
                                <h3>{enderecoPrincipal?.rua}, {enderecoPrincipal?.numero}</h3>
                                <span className="flex leading-5">{enderecoPrincipal?.bairro} - {enderecoPrincipal?.complemento} - {enderecoPrincipal?.cep} - {enderecoPrincipal?.cidade} - {enderecoPrincipal?.pontoDeReferencia}</span>
                                <p className="flex leading-5">{enderecoPrincipal?.nomeEndereco} - {enderecoPrincipal?.nome}</p>
                            </div>
                            <div className="text-white max-w-[300px] w-full ml-auto">
                                <Botao cor="bg-orange-500" texto="Ver Endereços" icone={<FaLocationDot className="text-lg" />} link="/menuUsuario/adicionarEndereco" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold">Preferências:</h2>
                            <div className="flex flex-col md:grid md:grid-cols-2">
                                {preferencias && Object.entries(preferencias).map(([chave, valor]) => (
                                    <p key={chave}>{chave}: {valor}</p>
                                ))}
                            </div>
                            <div className="text-white max-w-[300px] w-full ml-auto">
                                <Botao cor="bg-orange-500" texto="Ver Preferências" icone={<FaCogs className="text-lg" />} link="/menuUsuario/preferencias" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 md:gap-6">
                            <button style={{ textShadow: '0 0 2px 1px black', boxShadow: '0px 0px 2px 1px black' }} className="bg-red-600 uppercase font-black text-lg leading-6 p-2 text-white" onClick={() => setShowDialog(false)}>Revisar Pedido</button>
                            <button style={{ textShadow: '0 0 2px 1px black', boxShadow: '0px 0px 2px 1px black' }} className="bg-green-600 uppercase font-black text-lg leading-6 p-2 text-white" onClick={handleFinalConfirm}>Confirmar Pedido</button>
                        </div>
                    </div>
                </Dialog>
            </Template>
        </RotaProtegida>
    );
}
