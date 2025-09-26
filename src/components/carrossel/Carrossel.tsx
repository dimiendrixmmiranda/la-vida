'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'

export default function Carrossel() {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 xl:max-w-[1400px] faq">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                // Responsividade: 1 slide até 765px, 3 slides acima disso
                breakpoints={{
                    766: { slidesPerView: 3 },
                    1279: { slidesPerView: 4 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                a11y={{ enabled: true }}
                className="!pb-10"
            >
                <SwiperSlide>
                    <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white p-4 flex flex-col gap-4 lg:h-[485px] 2xl:h-[460px]">
                        <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto'>
                            <Image alt='imagem' src={'/adm-mulher.png'} fill className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 text-center'>
                            <h2 className='uppercase font-black text-2xl leading-6'>Viviane Silva</h2>
                            <span className='text-xl font-semibold leading-6'>Coordenadora / Motorista</span>
                            <p className='line-clamp-6'>Nullam varius tristique nulla vel placerat. In rhoncus ultrices interdum. Aliquam eget risus dolor. In hac habitasse platea dictumst. Pellentesque id interdum ex, non gravida metus.</p>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white p-4 flex flex-col gap-4 lg:h-[485px] 2xl:h-[460px]">
                        <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto'>
                            <Image alt='imagem' src={'/adm-homem.png'} fill className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 text-center'>
                            <h2 className='uppercase font-black text-2xl leading-6'>Adriano Rodrigues</h2>
                            <span className='text-xl font-semibold leading-6'>Administrador</span>
                            <p className='line-clamp-6'>Nullam varius tristique nulla vel placerat. In rhoncus ultrices interdum. Aliquam eget risus dolor. In hac habitasse platea dictumst. Pellentesque id interdum ex, non gravida metus.</p>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white p-4 flex flex-col gap-4 lg:h-[485px] 2xl:h-[460px]">
                        <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto'>
                            <Image alt='imagem' src={'/adm-mulher.png'} fill className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 text-center'>
                            <h2 className='uppercase font-black text-2xl leading-6'>Regiane Rosa</h2>
                            <span className='text-xl font-semibold leading-6'>Coordenadora / Motorista</span>
                            <p className='line-clamp-6'>Nullam varius tristique nulla vel placerat. In rhoncus ultrices interdum. Aliquam eget risus dolor. In hac habitasse platea dictumst. Pellentesque id interdum ex, non gravida metus.</p>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="relative group overflow-hidden rounded-2xl shadow-md bg-white p-4 flex flex-col gap-4 lg:h-[485px] 2xl:h-[460px]">
                        <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto'>
                            <Image alt='imagem' src={'/adm-homem.png'} fill className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 text-center'>
                            <h2 className='uppercase font-black text-2xl leading-6'>Dimi Endrix</h2>
                            <span className='text-xl font-semibold leading-6'>Coordenador / Desenvolvedor</span>
                            <p className='line-clamp-6'>Nullam varius tristique nulla vel placerat. In rhoncus ultrices interdum. Aliquam eget risus dolor. In hac habitasse platea dictumst. Pellentesque id interdum ex, non gravida metus.</p>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
