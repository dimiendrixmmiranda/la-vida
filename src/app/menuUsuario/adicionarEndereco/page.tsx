'use client'
import CaixaDeDialogo from "@/components/caixaDeDialogo/CaixaDeDialogo";
import FormularioAdicionarEndereco from "@/components/formularioAdicionarEndereco/FormularioAdicionarEndereco";
import Template from "@/components/template/Template";
import useAuth from "@/data/hooks/useAuth";
import { db } from "@/lib/firebase/firebase";
import Endereco from "@/lib/interfaces/Endereco";
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle, IoMdReturnLeft } from "react-icons/io";

export default function Page() {
    const { usuario } = useAuth()
    const [visibleFormularioEndereco, setVisibleFormularioEndereco] = useState(false)
    const [enderecoSelecionado, setEnderecoSelecionado] = useState<Endereco | null>(null)
    const [enderecos, setEnderecos] = useState<Endereco[] | null>(null)
    const [visibleDialogoExcluir, setVisibleDialogoExcluir] = useState(false)

    const handleExcluir = async (endereco: Endereco) => {
        const id = endereco.id
        if (!usuario) return
        await excluirEndereco(usuario.uid, id)
        // Atualiza a lista local removendo o item
        setEnderecos(prev => prev && prev.filter(endereco => endereco.id !== id))
    }

    const excluirEndereco = async (userId: string, enderecoId: string) => {
        try {
            await deleteDoc(doc(db, "usuarios", userId, "enderecos", enderecoId))
            console.log("Endereço excluído com sucesso!")
        } catch (error) {
            console.error("Erro ao excluir endereço:", error)
        }
    }


    async function definirEnderecoPrincipal(userId: string, enderecoId: string) {
        const usuarioRef = doc(db, "usuarios", userId);
        await updateDoc(usuarioRef, {
            enderecoPrincipalId: enderecoId
        });
    }

    useEffect(() => {
        if (!usuario) return

        const unsubscribe = onSnapshot(
            collection(db, "usuarios", usuario.uid, "enderecos"),
            (snapshot) => {
                const lista = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Endereco[]
                setEnderecos(lista)
            }
        )

        return () => unsubscribe()
    }, [usuario])

    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 lg:-mb-24">
                <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1000px] xl:gap-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="uppercase font-black text-3xl leading-8" style={{ textShadow: '1px 1px 2px black' }}>Meus Enderecos Cadastrados:</h3>
                        <div>
                            <ul className="flex flex-col gap-4 md:grid md:grid-cols-2">
                                {
                                    usuario != undefined && enderecos && enderecos.length > 0 ? (
                                        enderecos.map((endereco, i) => {
                                            console.log(endereco)
                                            return (
                                                <li
                                                    key={i}
                                                    className={`relative p-4 rounded-lg flex flex-col gap-2 transition-colors duration-300
                                                            ${usuario?.enderecoPrincipalId === endereco.id
                                                            ? "bg-green-600 border-2 border-green-400"
                                                            : "bg-azul-medio"}`
                                                    }
                                                >
                                                    <div className="grid grid-cols-[1fr_20px]">
                                                        <h2 className="font-bold text-xl leading-5 line-clamp-1 overflow-hidden">{endereco.rua}, {endereco.numero}</h2>
                                                        <button className="" onClick={() => {
                                                            definirEnderecoPrincipal(usuario?.uid, endereco.id)
                                                        }}>
                                                            <IoMdCheckmarkCircle />
                                                        </button>
                                                    </div>
                                                    <span className="flex leading-5">{endereco.bairro} - {endereco.complemento} - {endereco.cep} - {endereco.cidade} - {endereco.pontoDeReferencia}</span>
                                                    <p className="flex leading-5">{endereco.nomeEndereco} - {endereco.nome}</p>
                                                    <div className="grid grid-cols-2 gap-2 mt-auto">
                                                        <button
                                                            className="bg-laranja text-white text-sm py-2 flex items-center justify-center gap-2"
                                                            style={{ textShadow: '1px 1px 2px black' }}
                                                            onClick={() => {
                                                                setEnderecoSelecionado(endereco)
                                                                setVisibleFormularioEndereco(true)
                                                            }}
                                                        >
                                                            <p className="hidden uppercase font-bold sm:block md:hidden lg:block">Editar Endereço</p>
                                                            <FaEdit />
                                                        </button>
                                                        <button
                                                            className="bg-red-600 text-white text-sm py-2 flex items-center justify-center gap-2"
                                                            style={{ textShadow: '1px 1px 2px black' }}
                                                            onClick={() => {
                                                                setEnderecoSelecionado(endereco)
                                                                setVisibleDialogoExcluir(true)
                                                            }}
                                                        >
                                                            <p className="hidden uppercase font-bold sm:block md:hidden lg:block">Excluir Endereço</p>
                                                            <FaTrashAlt />
                                                        </button>
                                                    </div>
                                                    {visibleFormularioEndereco && (
                                                        <FormularioAdicionarEndereco
                                                            visibleFormularioEndereco={visibleFormularioEndereco}
                                                            setVisibleFormularioEndereco={setVisibleFormularioEndereco}
                                                            endereco={enderecoSelecionado || undefined}
                                                        />
                                                    )}
                                                    {visibleDialogoExcluir && enderecoSelecionado && (
                                                        <CaixaDeDialogo
                                                            frase="Deseja realmente excluir este endereço?"
                                                            funcaoSim={() => {
                                                                handleExcluir(enderecoSelecionado)
                                                                setVisibleDialogoExcluir(false)
                                                                setEnderecoSelecionado(null)
                                                            }}
                                                            funcaoNao={() => {
                                                                setVisibleDialogoExcluir(false)
                                                                setEnderecoSelecionado(null)
                                                            }}
                                                            visibleDialogo
                                                        />
                                                    )}
                                                </li>
                                            )
                                        })
                                    ) : (
                                        <h2 className="uppercase font-bold text-lg text-center leading-5 md:col-start-1 md:col-end-3">Nenhum Endereço Cadastrado</h2>
                                    )
                                }
                            </ul>
                        </div>
                        <button
                            onClick={() => {
                                setEnderecoSelecionado(null)
                                setVisibleFormularioEndereco(true)
                            }}
                            className="uppercase font-bold text-lg text-center bg-azul-escuro p-2 text-white mt-2"
                            style={{ textShadow: '1px 1px 2px black' }}
                        >
                            Adicionar Novo Endereço
                        </button>
                        <Link href={'/usuario'} className="bg-laranja text-center uppercase font-bold text-lg w-fit p-2 ml-auto flex justify-center items-center gap-2 xl:mb-16" style={{boxShadow: '0px 0px 2px 1px black', textShadow: '1px 1px 2px black'}}>
                            <IoMdReturnLeft className="text-lg" />
                            <p>
                                Voltar
                            </p>
                        </Link>
                        <FormularioAdicionarEndereco
                            visibleFormularioEndereco={visibleFormularioEndereco}
                            setVisibleFormularioEndereco={setVisibleFormularioEndereco}
                            endereco={enderecoSelecionado || undefined}
                            onSalvar={(enderecoAtualizado) => {
                                setEnderecos(prev => prev?.map(e => e.id === enderecoAtualizado.id ? enderecoAtualizado : e) || []);
                                setVisibleFormularioEndereco(false);
                                setEnderecoSelecionado(null);
                            }}
                        />
                    </div>
                </div>
            </div>
        </Template>
    )
}