'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'
import { CometCard } from "@/components/ui/comet-card";

export default function Carrossel() {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 xl:max-w-[1400px] faq">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    766: { slidesPerView: 2 },
                    1023: { slidesPerView: 3 },
                    1279: { slidesPerView: 4 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                a11y={{ enabled: true }}
            >
                <SwiperSlide>
                    <CometCard>
                        <button
                            type="button"
                            className="my-10 max-w-[320px] flex cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-azul-medio p-2"
                            aria-label="View invite F7RA"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "none",
                                opacity: 1,
                            }}
                        >
                            <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white p-4 flex flex-col gap-4 lg:h-[485px] 2xl:h-[460px]">
                                <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto'>
                                    <Image alt='imagem' src={'/viv-1.jpg'} fill className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105' />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                                    <h2 className='uppercase font-black text-2xl leading-6'>Viviane Silva</h2>
                                    <span className='text-xl font-semibold leading-6'>Coordenadora / Motorista</span>
                                    <p className='line-clamp-6'>Nullam varius tristique nulla vel placerat. In rhoncus ultrices interdum. Aliquam eget risus dolor. In hac habitasse platea dictumst. Pellentesque id interdum ex, non gravida metus.</p>
                                </div>
                            </article>
                        </button>
                    </CometCard>
                </SwiperSlide>
                <SwiperSlide>
                    <CometCard>
                        <button
                            type="button"
                            className="my-10 max-w-[320px] flex cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-azul-medio p-2"
                            aria-label="View invite F7RA"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "none",
                                opacity: 1,
                            }}
                        >
                            <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white p-4 flex flex-col gap-4 lg:h-[485px] 2xl:h-[460px]">
                                <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto'>
                                    <Image alt='imagem' src={'/adr-1.png'} fill className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105' />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                                    <h2 className='uppercase font-black text-2xl leading-6'>Adriano Rodrigues</h2>
                                    <span className='text-xl font-semibold leading-6'>Administrador</span>
                                    <p className='line-clamp-6'>Nullam varius tristique nulla vel placerat. In rhoncus ultrices interdum. Aliquam eget risus dolor. In hac habitasse platea dictumst. Pellentesque id interdum ex, non gravida metus.</p>
                                </div>
                            </article>
                        </button>
                    </CometCard>
                </SwiperSlide>
                <SwiperSlide>
                    <CometCard>
                        <button
                            type="button"
                            className="my-10 max-w-[320px] flex cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-azul-medio p-2"
                            aria-label="View invite F7RA"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "none",
                                opacity: 1,
                            }}
                        >
                            <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white p-4 flex flex-col gap-4 lg:h-[485px] 2xl:h-[460px]">
                                <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto'>
                                    <Image alt='imagem' src={'/reg-1.png'} fill className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105' />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                                    <h2 className='uppercase font-black text-2xl leading-6'>Regiane Rosa</h2>
                                    <span className='text-xl font-semibold leading-6'>Coordenadora / Motorista</span>
                                    <p className='line-clamp-6'>Nullam varius tristique nulla vel placerat. In rhoncus ultrices interdum. Aliquam eget risus dolor. In hac habitasse platea dictumst. Pellentesque id interdum ex, non gravida metus.</p>
                                </div>
                            </article>
                        </button>
                    </CometCard>
                </SwiperSlide>
                <SwiperSlide>
                    <CometCard>
                        <button
                            type="button"
                            className="my-10 max-w-[320px] flex cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-azul-medio p-2"
                            aria-label="View invite F7RA"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "none",
                                opacity: 1,
                            }}
                        >
                            <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white p-4 flex flex-col gap-4 lg:h-[485px] 2xl:h-[460px]">
                                <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto'>
                                    <Image alt='imagem' src={'/dim-1.png'} fill className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105' />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                                    <h2 className='uppercase font-black text-2xl leading-6'>Dimi Endrix</h2>
                                    <span className='text-xl font-semibold leading-6'>Coordenador / Desenvolvedor</span>
                                    <p className='line-clamp-6'>Nullam varius tristique nulla vel placerat. In rhoncus ultrices interdum. Aliquam eget risus dolor. In hac habitasse platea dictumst. Pellentesque id interdum ex, non gravida metus.</p>
                                </div>
                            </article>
                        </button>
                    </CometCard>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
