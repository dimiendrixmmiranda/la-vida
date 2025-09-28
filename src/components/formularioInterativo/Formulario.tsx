"use client"
import Image from "next/image";
import { useState } from "react";

export default function Formulario() {
    const [active, setActive] = useState<"login" | "cadastro">("login");
    console.log(active)
    return (
        <section className="p-4 max-w-[700px] mx-auto overflow-hidden lg:max-w-[1200px]" >
            <div className="flex flex-col gap-2 w-full h-[650px] bg-zinc-900 text-white p-4 relative overflow-hidden md:h-[740px] md:p-8 lg:h-[520px] lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8" style={{borderRadius: '16px', boxShadow: '0 0 4px 2px black'}}>
                <div className="flex flex-col w-full h-full z-10 lg:p-8">
                    <div className={`${active === 'cadastro' ? 'hidden' : 'flex'} flex-col gap-4 my-auto md:gap-6`}>
                        <div className="relative w-[150px] h-[150px] hidden mx-auto lg:block">
                            <Image alt="Logo" src={'/logo-la-vida.png'} fill className="object-contain"/>
                        </div>
                        <h2 className="uppercase font-secundaria text-3xl font-bold text-center md:text-5xl" style={{textShadow: '1px 1px 3px black'}}>Fazer Login</h2>
                        <form className="flex flex-col gap-2 md:gap-4">
                            <input type="text" placeholder="E-mail..." className="p-2 h-[35px] overflow-hidden" style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="password" placeholder="Senha..." className="p-2 h-[35px] overflow-hidden" style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <button
                                className="px-8 py-2 rounded-md bg-zinc-900 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-zinc-900"
                                type="submit"
                            >
                                Entrar
                            </button>
                        </form>
                    </div>
                    <div className={`${active === 'cadastro' ? 'flex' : 'hidden'} flex-col gap-4 my-auto md:gap-6`}>
                        <h2 className="uppercase font-secundaria text-3xl font-bold text-center md:text-5xl" style={{textShadow: '1px 1px 3px black'}}>Já tem uma conta?</h2>
                        <p className="text-lg leading-6 text-center md:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                        <button
                            className="px-8 py-2 rounded-md bg-azul-medio-fraco text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-azul-medio-fraco"
                            onClick={() => setActive("login")}
                        >
                            Faça Login
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full z-10 lg:p-8">
                    <div className={`${active === 'cadastro' ? 'flex' : 'hidden'} flex-col gap-4 my-auto md:gap-6`}>
                        <h2 className="uppercase font-secundaria text-3xl font-bold text-center md:text-5xl" style={{textShadow: '1px 1px 3px black'}}>Cadastro</h2>
                        <form className="flex flex-col gap-2 md:gap-4">
                            <input type="text" placeholder="Nome..." className="p-2 h-[35px] overflow-hidden" style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="text" placeholder="E-mail..." className="p-2 h-[35px] overflow-hidden" style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="password" placeholder="Senha..." className="p-2 h-[35px] overflow-hidden" style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <input type="password" placeholder="Confirme sua senha..." className="p-2 h-[35px] overflow-hidden" style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                            <button
                                className="px-8 py-2 rounded-md bg-zinc-900 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-zinc-900"
                            >
                                Cadastrar
                            </button>
                        </form>
                    </div>
                    <div className={`${active === 'cadastro' ? 'hidden' : 'flex'} flex-col gap-4 my-auto md:gap-6`}>
                        <h2 className="uppercase font-secundaria text-3xl font-bold text-center md:text-5xl" style={{textShadow: '1px 1px 3px black'}}>Não tem uma conta?</h2>
                        <p className="text-lg leading-6 text-center md:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                        <button
                            className="px-8 py-2 rounded-md bg-azul-medio-fraco text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-azul-medio-fraco"
                            onClick={() => setActive("cadastro")}
                        >
                            Cadastre-se
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col gap-2 w-full h-full bg-[url('/bg.png')] bg-cover bg-center absolute top-[-50%] transition-all duration-500 left-0 ${active === 'login' ? 'top-[-50%] left-0 lg:top-0 lg:left-[-50%]' : 'top-[50%] left-0 lg:top-0 lg:left-[50%]'}`}></div>
            </div>
        </section>
    );
}