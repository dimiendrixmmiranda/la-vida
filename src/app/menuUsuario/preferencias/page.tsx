'use client'
import Template from "@/components/template/Template";
import useAuth from "@/data/hooks/useAuth";
import { db } from "@/lib/firebase/firebase";
import { getDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdReturnLeft } from "react-icons/io";
import { doc, setDoc } from "firebase/firestore";

export default function Page() {
    const { usuario } = useAuth()

    const [temperatura, setTemperatura] = useState('')
    const [tipoDeLavagem, setTipoDeLavagem] = useState('')
    const [centrifugacao, setCentrifugacao] = useState('')
    const [amaciante, setAmaciante] = useState('')
    const [marcaDoAmaciante, setMarcaDoAmaciante] = useState('')
    const [sabao, setSabao] = useState('')
    const [marcaDoSabao, setMarcaDoSabao] = useState('')
    const [perfume, setPerfume] = useState('')
    const [separarPorCor, setSepararPorCor] = useState('')
    const [entrega, setEntrega] = useState('')


    const salvarPreferencias = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!usuario) return;

        const prefRef = doc(db, "usuarios", usuario.uid)
        try {
            await setDoc(prefRef, {
                preferencias: {
                    temperatura,
                    tipoDeLavagem,
                    centrifugacao,
                    amaciante,
                    marcaDoAmaciante,
                    sabao,
                    marcaDoSabao,
                    perfume,
                    separarPorCor,
                    entrega,
                }
            }, { merge: true })
            alert("Preferências salvas com sucesso!")
        } catch (error) {
            console.error("Erro ao salvar preferências:", error)
        }
    };

    useEffect(() => {
        if (!usuario) return;
        const carregarPreferencias = async () => {
            const docSnap = await getDoc(doc(db, "usuarios", usuario.uid));
            if (docSnap.exists()) {
                const data = docSnap.data();
                const prefs = data.preferencias || {};
                setTemperatura(prefs.temperatura || '');
                setTipoDeLavagem(prefs.tipoDeLavagem || '');
                setCentrifugacao(prefs.centrifugacao || '');
                setAmaciante(prefs.amaciante || '');
                setMarcaDoAmaciante(prefs.marcaDoAmaciante || '');
                setSabao(prefs.sabao || '');
                setMarcaDoSabao(prefs.marcaDoSabao || '');
                setPerfume(prefs.perfume || '');
                setSepararPorCor(prefs.separarPorCor || '');
                setEntrega(prefs.entrega || '');
            }
        }

        carregarPreferencias();
    }, [usuario]);


    return (
        <Template ondaInvertida={true}>
            <div className="min-h-screen bg-azul flex justify-center text-white p-4 -mb-16 pb-24 md:p-8 md:-mb-20 lg:-mb-24">
                <div className="mt-[80px] flex flex-col gap-4 text-white w-full h-full max-w-[1000px] xl:gap-8">
                    <h2 className="uppercase text-3xl text-c'enter xl:text-5xl">Defina suas preferências de lavagem:</h2>
                    <form className="flex flex-col gap-4 md:'gap-6 md:grid md:grid-cols-2" onSubmit={(e) => salvarPreferencias(e)}>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="temperatura">Temperatura da água:</label>
                            <select name="temperatura" id="temperatura" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={temperatura} onChange={(e) => setTemperatura(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="fria">Fria</option>
                                <option className="h-[30px]" value="morna">Morna</option>
                                <option className="h-[30px]" value="quente">Quente</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="tipoDeLavagem">Tipo de Lavagem:</label>
                            <select name="tipoDeLavagem" id="tipoDeLavagem" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={tipoDeLavagem} onChange={(e) => setTipoDeLavagem(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="normal">Normal</option>
                                <option className="h-[30px]" value="rapida">Rápida</option>
                                <option className="h-[30px]" value="delicada">Delicada</option>
                                <option className="h-[30px]" value="pesada">Pesada</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="centrifugacao">Intensidade de Centrifugação:</label>
                            <select name="centrifugacao" id="centrifugacao" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={centrifugacao} onChange={(e) => setCentrifugacao(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="leve">Leve</option>
                                <option className="h-[30px]" value="media">Média</option>
                                <option className="h-[30px]" value="alta">Alta</option>
                                <option className="h-[30px]" value="sem-centrifugar">Sem Centrifugar</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="amaciante">Amaciante:</label>
                            <select name="amaciante" id="amaciante" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={amaciante} onChange={(e) => setAmaciante(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="sim">Sim</option>
                                <option className="h-[30px]" value="nao">Não</option>
                                <option className="h-[30px]" value="hipoalergenico">Hipoalergênico</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="marcaDoAmaciante">Marca do Amaciante:</label>
                            <select name="marcaDoAmaciante" id="marcaDoAmaciante" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={marcaDoAmaciante} onChange={(e) => setMarcaDoAmaciante(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="downy">Downy</option>
                                <option className="h-[30px]" value="comfort">Comfort</option>
                                <option className="h-[30px]" value="fofo">Fofo</option>
                                <option className="h-[30px]" value="brilhante">Brilhante</option>
                                <option className="h-[30px]" value="tixan-ype">Tixan Ypê</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="sabao">Sabão:</label>
                            <select name="sabao" id="sabao" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={sabao} onChange={(e) => setSabao(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="po">Em pó</option>
                                <option className="h-[30px]" value="liquido">Líquido</option>
                                <option className="h-[30px]" value="hipoalergenico">Hipoalergênico</option>
                                <option className="h-[30px]" value="biodegradavel">Biodegradável</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="marcaDoSabao">Marca do Sabão:</label>
                            <select name="marcaDoSabao" id="marcaDoSabao" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={marcaDoSabao} onChange={(e) => setMarcaDoSabao(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="omo">Omo</option>
                                <option className="h-[30px]" value="ariel">Ariel</option>
                                <option className="h-[30px]" value="surf">Surf</option>
                                <option className="h-[30px]" value="ype">Ypê</option>
                                <option className="h-[30px]" value="urca">Urca</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="perfume">Perfume da Lavagem:</label>
                            <select name="perfume" id="perfume" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={perfume} onChange={(e) => setPerfume(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="neutro">Neutro</option>
                                <option className="h-[30px]" value="floral">Floral</option>
                                <option className="h-[30px]" value="citrico">Cítrico</option>
                                <option className="h-[30px]" value="sem">Sem fragrância</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="separarPorCor">Separar por cor:</label>
                            <select name="separarPorCor" id="separarPorCor" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={separarPorCor} onChange={(e) => setSepararPorCor(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="sim">Sim</option>
                                <option className="h-[30px]" value="nao">Não</option>
                            </select>
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label className="md:text-xl" htmlFor="entrega">Entrega:</label>
                            <select name="entrega" id="entrega" className="text-black h-[30px] p-2 md:h-[40px] md:text-lg"
                                value={entrega} onChange={(e) => setEntrega(e.target.value)}>
                                <option className="h-[30px]" value="">Selecione</option>
                                <option className="h-[30px]" value="dobrada">Dobrada</option>
                                <option className="h-[30px]" value="cabides">Em cabides</option>
                            </select>
                        </fieldset>

                        <button className="bg-laranja py-2 font-bold uppercase col-start-1 col-end-3 text-xl" style={{ textShadow: '1px 1px 2px black', boxShadow: '1px 1px 3px 2px black' }} type="submit">Salvar Alterações</button>
                    </form>
                    <Link href={'/usuario'} className="bg-laranja text-center uppercase font-bold text-lg w-fit p-2 ml-auto flex justify-center items-center gap-2 xl:mb-16" style={{ boxShadow: '0px 0px 2px 1px black', textShadow: '1px 1px 2px black' }}>
                        <IoMdReturnLeft className="text-lg" />
                        <p>
                            Voltar
                        </p>
                    </Link>
                </div>
            </div>
        </Template>
    )
}
