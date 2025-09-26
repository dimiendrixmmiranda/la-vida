import Template from "@/components/template/Template";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import Image from "next/image";
import { GiClothes, GiWashingMachine } from "react-icons/gi";
import { MdBlockFlipped, MdIron } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { FaShippingFast, FaWhatsapp } from "react-icons/fa";
import Carrossel from "@/components/carrossel/Carrossel";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { faq } from "@/lib/constants/faq";
import Onda from "@/components/onda/Onda";
import RedesSociaisAlternativo from "@/components/redesSociais/RedesSociaisAlternativo";
//novo teste aqui
export default async function Page() {
	return (
		<Template>
			<BackgroundBeamsWithCollision>
				<div className="flex flex-col justify-center items-center z-20 p-4">
					<h2 className="text-[4em] leading-[.9em] relative font-cursiva font-bold text-center text-white dark:text-white font-sans tracking-tight md:text-[5em] 2xl:text-[7em]" style={{ textShadow: '1px 1px 2px black' }}>
						La vida - Mais que lavar roupas,
						<div className="relative mt-5 mx-auto block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
							<div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-cyan-500 via-cyan-50-800 to-sky-400 [text-shadow:0_0_rgba(0,0,0,0.1)]">
								<span className="block leading-[.7em]">Lavamos Preocupações!</span>
							</div>
						</div>
					</h2>
					<div className="mt-5 font-terciaria text-center text-xl leading-7 text-white md:text-2xl 2xl:text-3xl">
						<span className="flex">Lavagem, secagem e passagem de roupas de forma rápida, prática e econômica!</span>
					</div>
					<div className="grid grid-cols-2 gap-2 text-white mt-4 font-primaria">
						<Link href={'/'} className="grid grid-cols-[35px_1fr] p-1 bg-green-600 gap-2 rounded-md md:flex md:justify-center md:p-2">
							<FaWhatsapp className="text-3xl mx-auto my-auto md:mx-0" />
							<p className="line-clamp-3 leading-5 uppercase font-bold text-center my-auto mx-0">Fale com a Unidade Mais Próxima</p>
						</Link>

						<Link href={'/'} className="grid grid-cols-[35px_1fr] p-1 bg-azul gap-2 rounded-md md:flex md:justify-center md:p-2">
							<FaShippingFast className="text-3xl mx-auto my-auto md:mx-0" />
							<p className="line-clamp-3 leading-5 uppercase font-bold text-center my-auto mx-0">Solicite a coleta de Roupas</p>
						</Link>
					</div>
				</div>
			</BackgroundBeamsWithCollision>
			<Onda invertido={true} primeiraOnda={true} />
			<div className="min-h-screen bg-azul-medio p-4 flex justify-center items-center">
				<div className="flex flex-col items-center lg:grid lg:grid-cols-2 md:gap-8 xl:max-w-[1250px]">
					<div className="relative w-full max-w-[300px] h-[300px] sm:max-w-[400px] md:max-w-[600px] md:h-[400px]">
						<Image alt="Lavanderia" src={'/lavanderia.png'} fill className="object-contain" />
					</div>
					<div className="flex flex-col gap-2 text-azul-medio bg-white p-4 max-w-[700px] md:p-8">
						<div className="flex items-center gap-2 md:gap-4">
							<h3 className="font-secundaria text-3xl font-black md:text-5xl">Sobre a <b className="font-cursiva text-4xl md:text-6xl">La Vida</b></h3>
							<div className="relative w-8 h-8 mb-1 md:w-12 md:h-12">
								<Image alt="logo" src={'/logo-la-vida.png'} fill className="object-contain" />
							</div>
						</div>
						<p className="text-xl">Lavamos suas roupas com cuidado e entregamos praticidade no seu dia a dia.</p>
						<p className="text-xl">
							Lave ou seque suas roupas de forma prática, rápida e econômica! Nossos serviços custam entre R$20 e R$30, dependendo da unidade e da quantidade de peças. Você poderá escolher entre as marcas de sabão em pó Omo e Brilhante e as marcas de amaciante Downy, Fofo e Confort, ajustando a quantidade de produto com nosso cesto medidor para garantir uma experiência perfeita para suas roupas.
						</p>
					</div>
				</div>
			</div>
			<Onda invertido={false} />
			{/* Vantagens */}
			<div className="min-h-screen bg-white p-4 flex justify-center items-center">
				<div className="flex flex-col gap-4 md:p-8 lg:gap-8">
					<div className="flex flex-col gap-4 lg:gap-8">
						<h3 className="text-3xl font-semibold leading-[1.3em] text-center text-azul-medio md:text-5xl md:leading-[1.3em]">Dedique seu tempo ao que realmente importa: <b className="font-black">VOCÊ!</b></h3>
						<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
							<div className="flex flex-col justify-center items-center text-azul-medio">
								<GiWashingMachine className="text-5xl md:text-7xl xl:text-[6em]" />
								<p className="uppercase font-black leading-5 text-2xl mt-2 md:text-3xl xl:text-4xl">30 min</p>
								<span className="font-semibold leading-5 mt-1 text-center md:text-lg xl:text-xl">Para Lavar</span>
							</div>
							<div className="flex flex-col justify-center items-center text-azul-medio">
								<GiClothes className="text-5xl md:text-7xl xl:text-[6em]" />
								<p className="uppercase font-black leading-5 text-2xl mt-2 md:text-3xl xl:text-4xl">40 min</p>
								<span className="font-semibold leading-5 mt-1 text-center md:text-lg xl:text-xl">Para Secar</span>
							</div>
							<div className="flex flex-col justify-center items-center text-azul-medio">
								<MdIron className="text-5xl md:text-7xl xl:text-[6em]" />
								<p className="uppercase font-black leading-5 text-2xl mt-2 md:text-3xl xl:text-4xl">40 min</p>
								<span className="font-semibold leading-5 mt-1 text-center md:text-lg xl:text-xl">Para Passar</span>
							</div>
							<div className="flex flex-col justify-center items-center text-azul-medio">
								<RiMoonClearFill className="text-5xl md:text-7xl xl:text-[6em]" />
								<p className="uppercase font-black leading-5 text-2xl mt-2 md:text-3xl xl:text-4xl">100%</p>
								<span className="font-semibold leading-5 mt-1 text-center md:text-lg xl:text-xl">Produtos profissionais</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-3xl font-semibold text-azul-medio">Quem usa La Vida não quer parar! <b className="font-black">Siga as recomendações:</b></h3>
						<ul className="flex flex-col gap-4 md:grid md:grid-cols-2">
							<li className="bg-azul-medio p-4 text-white lg:p-8">
								<div className="flex flex-col gap-2">
									<h3 className="uppercase font-black text-3xl">Beneficios</h3>
									<ul className="flex flex-col gap-2">
										<li>Roupas sempre limpas e perfumadas</li>
										<li>Praticidade no dia a dia</li>
										<li>Flexibilidade na quantidade de sabão e amaciante</li>
										<li>Economia de tempo</li>
										<li>Maior durabilidade das peças</li>
									</ul>
								</div>
							</li>
							<li className="bg-azul-medio p-4 text-white lg:p-8">
								<div className="flex flex-col gap-2">
									<h3 className="uppercase font-black text-3xl">Comodidades</h3>
									<ul className="flex flex-col gap-2">
										<li>Retirada e entrega em domicílio</li>
										<li>Escolha da marca de sabão e amaciante</li>
										<li>Cesto medidor para ajuste de produtos</li>
										<li>Agendamento online ou por telefone</li>
										<li>Pacotes econômicos por quantidade de peças</li>
									</ul>
								</div>
							</li>
							<li className="bg-azul-medio p-4 text-white lg:p-8">
								<div className="flex flex-col gap-2">
									<h3 className="uppercase font-black text-3xl">Não fazemos</h3>
									<ul className="flex flex-col gap-2">
										<li className="grid grid-cols-[25px_1fr] gap-2">
											<MdBlockFlipped className="text-2xl my-auto" />
											<p>
												Não usar produtos de baixa qualidade
											</p>
										</li>
										<li className="grid grid-cols-[25px_1fr] gap-2">
											<MdBlockFlipped className="text-2xl my-auto" />
											<p>
												Não danificar roupas ou acessórios
											</p>
										</li>
										<li className="grid grid-cols-[25px_1fr] gap-2">
											<MdBlockFlipped className="text-2xl my-auto" />
											<p>
												Não atrasar prazos de entrega
											</p>
										</li>
										<li className="grid grid-cols-[25px_1fr] gap-2">
											<MdBlockFlipped className="text-2xl my-auto" />
											<p>
												Não cobrar valores diferentes sem aviso
											</p>
										</li>
										<li className="grid grid-cols-[25px_1fr] gap-2">
											<MdBlockFlipped className="text-2xl my-auto" />
											<p>
												Não deixar o ambiente ou as máquinas sujas
											</p>
										</li>
									</ul>
								</div>
							</li>
							<li className="bg-azul-medio p-4 text-white lg:p-8">
								<div className="flex flex-col gap-2">
									<h3 className="uppercase font-black text-3xl">Dicas</h3>
									<ul className="flex flex-col gap-2">
										<li>Separe claras e escuras.</li>
										<li>Lave delicadas em ciclos suaves.</li>
										<li>Use a quantidade certa de sabão e amaciante.</li>
										<li>Passe roupas levemente úmidas.</li>
										<li>Prefira produtos de qualidade.</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
					<div className="flex justify-center items-center bg-green-600 text-white py-2 text-xl uppercase font-bold max-w-[450px] w-full mx-auto transition-all duration-300 hover:scale-[1.1]">
						<Link href={'/'} className="px-2 grid grid-cols-[40px_1fr] gap-1"><FaWhatsapp className="my-auto mx-auto text-3xl" />Entre Em Contato com Agente!</Link>
					</div>
				</div>
			</div>
			<Onda invertido={true} />
			{/* Serviços */}
			<div className="min-h-screen bg-azul-medio p-4 flex justify-center items-center">
				<div className="flex flex-col justify-center gap-4 text-white max-w-[1300px] mx-auto w-full lg:p-8 lg:gap-8">
					<h3 className="text-3xl font-semibold leading-[1.3em] text-center text-white md:text-5xl md:leading-[1.3em]">Confira nossos <b className="font-black">Serviços!</b></h3>
					<p className="text-center md:text-lg lg:text-xl xl:text-2xl">
						Lave e seque suas roupas em cerca de 1 hora com nossas máquinas modernas, que garantem qualidade e preservação dos tecidos, deixando tudo impecável. Se preferir, também oferecemos serviço completo: nós lavamos, secamos, passamos e ainda retiramos e entregamos suas roupas, com o tempo do serviço variando conforme a quantidade de peças.
					</p>
					<ul className="flex flex-col gap-4 md:grid md:grid-cols-3">
						<li className="flex flex-col gap-4 items-center bg-white text-azul-medio p-4 xl:p-6">
							<div className="w-[230px] h-[230px] relative bg-red-500 md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]"></div>
							<h3 className="uppercase font-bold text-center text-2xl leading-7 md:text-3xl">Lavagem, Secagem e Passagem</h3>
							<p className="text-lg text-center lg:text-xl">Lave e seque suas roupas rapidinho usando nossas maquinas modernas e secadores de alta performace. Se preferir fazermos isso por você!</p>
						</li>
						<li className="flex flex-col gap-4 items-center bg-white text-azul-medio p-4 xl:p-6">
							<div className="w-[230px] h-[230px] relative bg-red-500 md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]"></div>
							<h3 className="uppercase font-bold text-center text-2xl leading-7 md:text-3xl">Produtos de Qualidade</h3>
							<p className="text-lg text-center lg:text-xl">Utilizamos somente produtos de qualidade como sabão em pó da Omo e Brilhante além de amaciantes das marcas Downy, Fofo e Confort.</p>
						</li>
						<li className="flex flex-col gap-4 items-center bg-white text-azul-medio p-4 xl:p-6">
							<div className="w-[230px] h-[230px] relative bg-red-500 md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]"></div>
							<h3 className="uppercase font-bold text-center text-2xl leading-7 md:text-3xl">Qualidade e Praticidade</h3>
							<p className="text-lg text-center lg:text-xl">Serviços rápidos e eficientes, cuidando das suas roupas com todo o carinho e atenção que elas merecem.</p>
						</li>
					</ul>
				</div>
			</div>
			<Onda invertido={false} />
			{/* Fundadores */}
			<div className="min-h-screen bg-white text-azul-medio p-4 flex flex-col gap-6 justify-center items-center lg:gap-10">
				<h3 className="text-3xl font-black text-center lg:text-5xl">Conheça nossos <b className="font-black uppercase">Fundadores!</b></h3>
				<Carrossel />
			</div>
			<Onda invertido={true} />
			{/* FAQ */}
			<div className="min-h-screen bg-azul-medio p-4 flex flex-col justify-center items-center md:p-8 faq">
				<div className="flex flex-col gap-6 w-full lg:gap-10">
					<h3 className="text-3xl font-black text-white text-center lg:text-5xl">Perguntas Frequentes</h3>
					<div className="card w-full max-w-[1200px] mx-auto 2xl:max-w-[1400px]">
						<Accordion className="flex flex-col gap-2 md:grid md:grid-cols-2">
							{
								faq.map((pergunta, i) => {
									return (
										<AccordionTab header={pergunta.pergunta} key={i}>
											<p className="m-0">
												{pergunta.resposta}
											</p>
										</AccordionTab>
									)
								})
							}
						</Accordion>
					</div>
				</div>
			</div>
			<Onda invertido={false} />
			{/* Contato */}
			<div className="min-h-screen bg-white p-4 flex flex-col gap-4 justify-center items-center md:p-8 lg:gap-6 faq">
				<div className="flex flex-col justify-center items-center font-primaria">
					<h2 className="text-4xl uppercase font-black sm:text-6xl lg:text-[7em]">Vamos</h2>
					<h3 className="text-4xl uppercase font-black text-transparent sm:text-6xl lg:text-[7em]" style={{ WebkitTextStroke: '2px var(--azul-medio)' }}>Conversar?</h3>
				</div>
				<div>
					<p className="text-center text-xl uppercase leading-6 md:text-3xl xl:text-4xl">Quer saber como facilitar sua rotina? Fale com a gente!</p>
				</div>
				<div>
					<RedesSociaisAlternativo/>
				</div>
			</div>
		</Template>
	)
}