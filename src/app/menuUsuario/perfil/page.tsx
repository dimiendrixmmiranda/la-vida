'use client'
import Template from "@/components/template/Template";
import useAuth from "@/data/hooks/useAuth";
import { db } from "@/lib/firebase/firebase";
import { atualizarCampo } from "@/lib/utils/atualizarCampoFirebase";
import handleImagemChange from "@/lib/utils/handleImageChange";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi"
import { IoMdReturnLeft } from "react-icons/io";

export default function Page() {
    const { usuario } = useAuth()
    const [nome, setNome] = useState(usuario?.nome)
    const [dataNascimento, setDataNascimento] = useState(usuario?.dataNascimento)
    const [sexo, setSexo] = useState(usuario?.sexo)
    const [telefone, setTelefone] = useState(usuario?.telefone)
    const [, setErroImagemTamanho] = useState<string | null>()
    const [, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()

    useEffect(() => {
        if (usuario) {
            setNome(usuario.nome)
            setDataNascimento(usuario.dataNascimento)
            setSexo(usuario.sexo)
            setTelefone(usuario.telefone)
        }
    }, [usuario])

    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 lg:-mb-24">
                <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[400px] md:max-w-[700px] xl:gap-8">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className="uppercase font-bold text-3xl text-center">Bem vindo {usuario?.nome.split(' ')[0]}</h1>
                        <div className="relative w-fit h-full mx-auto">
                            {usuario && (
                                <div className="w-[200px] h-[200px] rounded-full overflow-hidden relative mx-auto -mt-2">
                                    <Image
                                        alt="Imagem do Usuário"
                                        src={imagemPreview || usuario?.imagemURL}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            <input
                                className="hidden"
                                type="file"
                                id="imagens"
                                accept="image/*"
                                onChange={async (e) => {
                                    // processa a imagem e pega o Base64
                                    const base64 = await handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview);
                                    console.log(base64)
                                    // só atualiza no Firebase se base64 existir
                                    if (base64 && usuario?.uid) {
                                        await updateDoc(doc(db, "usuarios", usuario.uid), {
                                            imagemURL: base64
                                        });
                                    }
                                }}
                            />

                            <button
                                type="button"
                                className="bg-laranja text-white p-2 rounded-full absolute bottom-0 -right-4 flex items-center gap-1"
                                onClick={() => document.getElementById("imagens")?.click()}
                            >
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className="uppercase font-bold text-xl line-clamp-1">Dados Pessoais</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <p className="md:text-xl">Nome Completo:</p>
                                <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className="h-[30px] p-2 rounded-lg opacity-60 md:h-[40px] md:text-lg" disabled />
                            </div>
                            <div className="flex flex-col">
                                <p className="md:text-xl">Data de Nascimento:</p>
                                <input
                                    type="date"
                                    name="data"
                                    id="data"
                                    value={
                                        dataNascimento
                                            ? (typeof dataNascimento === "string"
                                                ? dataNascimento.split("T")[0] // caso já seja string ISO
                                                : dataNascimento.toDate().toISOString().split("T")[0]) // caso seja Timestamp
                                            : ""
                                    }
                                    onChange={(e) => setDataNascimento(e.target.value)} className="h-[30px] p-2 rounded-lg opacity-60 md:h-[40px] md:text-lg"
                                    disabled
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <p className="col-start-1 col-end-3 md:text-xl">Sexo:</p>
                                <div className="flex items-center gap-1">
                                    <input
                                        className="w-4 h-4"
                                        type="radio"
                                        name="genero"
                                        id="masculino"
                                        value="masculino"
                                        checked={sexo === "masculino"}
                                        readOnly
                                    />
                                    <label className="leading-4" htmlFor="masculino">
                                        Masculino
                                    </label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        className="w-4 h-4"
                                        type="radio"
                                        name="genero"
                                        id="feminino"
                                        value="feminino"
                                        checked={sexo === "feminino"}
                                        readOnly
                                    />
                                    <label className="leading-4" htmlFor="feminino">
                                        Feminino
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="md:text-xl">Telefone Principal:</p>
                                <div className="flex w-full">
                                    <input type="text" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="h-[30px] p-2 rounded-s-lg opacity-6 w-full text-black md:h-[40px] md:text-lg" />
                                    <button
                                        className="bg-laranja px-2 uppercase font-bold text-white rounded-r-lg"
                                        onClick={() => usuario && atualizarCampo(usuario.uid, "telefone", telefone || "")}
                                    >
                                        Alterar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={'/usuario'} className="bg-laranja text-center uppercase font-bold text-lg w-fit p-2 ml-auto flex justify-center items-center gap-2 xl:mb-16" style={{boxShadow: '0px 0px 2px 1px black', textShadow: '1px 1px 2px black'}}>
                        <IoMdReturnLeft className="text-lg"/>
                        <p>
                            Voltar
                        </p>
                    </Link>
                </div>
            </div>
        </Template>
    )
}