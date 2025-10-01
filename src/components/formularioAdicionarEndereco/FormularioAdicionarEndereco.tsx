import useAuth from "@/data/hooks/useAuth"
import { db } from "@/lib/firebase/firebase"
import Endereco from "@/lib/interfaces/Endereco"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"
import { TiDelete } from "react-icons/ti"

interface FormularioEnderecoProps {
    visibleFormularioEndereco: boolean
    endereco?: Endereco | undefined
    setVisibleFormularioEndereco: (visibleFormularioEndereco: boolean) => void
    onSalvar?: (endereco: Endereco) => void
}

export default function FormularioAdicionarEndereco({ visibleFormularioEndereco, endereco, setVisibleFormularioEndereco }: FormularioEnderecoProps) {
    const [nomeEndereco, setNomeEndereco] = useState(endereco?.nomeEndereco || '')
    const [cep, setCep] = useState(endereco?.cep || '')
    const [nome, setNome] = useState(endereco?.nome || '')
    const [rua, setRua] = useState(endereco?.rua || '')
    const [numero, setNumero] = useState(endereco?.numero || '')
    const [bairro, setBairro] = useState(endereco?.bairro || '')
    const [complemento, setComplemento] = useState(endereco?.complemento || '')
    const [pontoDeReferencia, setPontoDeReferencia] = useState(endereco?.pontoDeReferencia || '')
    const [estado, setEstado] = useState(endereco?.estado || '')
    const [cidade, setCidade] = useState(endereco?.cidade || '')

    useEffect(() => {
        if (endereco) {
            setNomeEndereco(endereco.nomeEndereco || "")
            setCep(endereco.cep || "")
            setNome(endereco.nome || "")
            setRua(endereco.rua || "")
            setNumero(endereco.numero || "")
            setBairro(endereco.bairro || "")
            setComplemento(endereco.complemento || "")
            setPontoDeReferencia(endereco.pontoDeReferencia || "")
            setEstado(endereco.estado || "")
            setCidade(endereco.cidade || "")
        } else {
            // Limpa todos os campos se for adicionar novo endereço
            setNomeEndereco("")
            setCep("")
            setNome("")
            setRua("")
            setNumero("")
            setBairro("")
            setComplemento("")
            setPontoDeReferencia("")
            setEstado("")
            setCidade("")
        }
    }, [endereco, visibleFormularioEndereco])

    const { usuario } = useAuth()

    console.log(endereco) // endereco chega porem os dados nao são setados no input

    const handleSalvar = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!usuario) {
            alert("Você precisa estar logado para salvar um endereço.")
            return
        }

        try {
            if (endereco?.id) {
                // ALTERAR
                const enderecoRef = doc(db, "usuarios", usuario.uid, "enderecos", endereco.id)
                await setDoc(enderecoRef, {
                    nomeEndereco,
                    cep,
                    nome,
                    rua,
                    numero,
                    bairro,
                    complemento,
                    pontoDeReferencia,
                    estado,
                    cidade,
                    atualizadoEm: new Date()
                }, { merge: true })
            } else {
                await addDoc(
                    collection(db, "usuarios", usuario.uid, "enderecos"),
                    {
                        nomeEndereco,
                        cep,
                        nome,
                        rua,
                        numero,
                        bairro,
                        complemento,
                        pontoDeReferencia,
                        estado,
                        cidade,
                        criadoEm: new Date()
                    }
                )
            }

            // Fecha o formulário em qualquer caso
            setVisibleFormularioEndereco(false)

        } catch (error) {
            console.error("Erro ao salvar endereço:", error)
        }
    }

    return (
        <form className={`${visibleFormularioEndereco ? 'flex' : 'hidden'} flex-col gap-3 bg-azul-escuro text-white p-4 fixed top-[50%] left-[50%] w-[95%] h-[95%] overflow-y-scroll z-20 max-w-[450px] rounded-lg`} style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="flex">
                <h2 className="flex-1 uppercase font-bold">Adicionar Novo Endereço:</h2>
                <button className="text-2xl" onClick={(e) => {
                    e.preventDefault()
                    setVisibleFormularioEndereco(false)
                }}>
                    <TiDelete />
                </button>
            </div>
            <fieldset className="flex flex-col">
                <label htmlFor="nomeEndereco">Nome do Endereço:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="nomeEndereco"
                    id="nomeEndereco"
                    placeholder="Exemplo: Minha Casa, Trabalho..."
                    value={nomeEndereco}
                    onChange={(e) => setNomeEndereco(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="cep">CEP:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="cep"
                    id="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                <Link href={'/'} className="text-xs underline mt-1 w-fit">Não sei meu cep</Link>
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="nome">Nome Completo do Destinatário:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="rua">Nome da Rua:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="rua"
                    id="rua"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="numero">Numero Da Casa:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="numero"
                    id="numero"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="bairro">Bairro</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="bairro"
                    id="bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="complemento">Complemento do Endereço (Opcional):</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="complemento"
                    id="complemento"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="pontoDeReferencia">Ponto de Referencia (Opcional):</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="pontoDeReferencia"
                    id="pontoDeReferencia"
                    value={pontoDeReferencia}
                    onChange={(e) => setPontoDeReferencia(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="estado">Estado:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="estado"
                    id="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col">
                <label htmlFor="cidade">Cidade:</label>
                <input
                    className="h-[30px] p-2 text-black rounded-md"
                    type="text"
                    name="cidade"
                    id="cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />
            </fieldset>

            <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
                <button
                    className="bg-green-600 uppercase font-bold py-1"
                    style={{ textShadow: '1px 1px 2px black' }}
                    onClick={(e) => handleSalvar(e)}
                >
                    Salvar Informações
                </button>
                <button
                    type="button"
                    className="bg-red-600 uppercase font-bold py-1"
                    style={{ textShadow: '1px 1px 2px black' }}
                    onClick={(e) => {
                        e.preventDefault()
                        setVisibleFormularioEndereco(false)
                    }}
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}