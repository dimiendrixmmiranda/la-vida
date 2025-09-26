'use client'
import { FaFacebook, FaTiktok } from 'react-icons/fa'
import styles from './style.module.css'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
export default function RedesSociaisAlternativo(){
    return (
        <div>
            <ul className='flex flex-col gap-4 w-[200px] md:grid md:grid-cols-2 md:w-[600px] 2xl:grid-cols-5 2xl:w-[1200px]'>
                <li className='flex justify-center w-full'>
                    <Link href={'/'} className='w-full'>
                        <button className={`${styles["blob-btn"]} ${styles.facebook} w-full flex justify-center`}>
                            <div className='flex items-center gap-2'>
                                <FaFacebook className='text-4xl' />
                                <p className='text-xl font-black '>Facebook</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center w-full'>
                    <Link href={'/'} className='w-full'>
                        <button className={`${styles["blob-btn"]} ${styles.instagram} w-full flex justify-center`}>
                            <div className='flex items-center gap-2'>
                                <AiFillInstagram className='text-4xl' />
                                <p className='text-xl font-black '>Instagram</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center w-full'>
                    <Link href={'/'} className='w-full'>
                        <button className={`${styles["blob-btn"]} ${styles.tiktok} w-full flex justify-center`}>
                            <div className='flex items-center gap-2'>
                                <FaTiktok className='text-4xl' />
                                <p className='text-xl font-black '>TikTok</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center w-full'>
                    <Link href={'/'} className='w-full'>
                        <button className={`${styles["blob-btn"]} ${styles.whatsapp} w-full flex justify-center`}>
                            <div className='flex items-center gap-2'>
                                <IoLogoWhatsapp className='text-4xl' />
                                <p className='text-xl font-black '>WhatsApp</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center w-full'>
                    <Link href={'/'} className='w-full'>
                        <button className={`${styles["blob-btn"]} ${styles.email} w-full flex justify-center`}>
                            <div className='flex items-center gap-2'>
                                <MdEmail className='text-4xl' />
                                <p className='text-xl font-black '>Email</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='hidden'>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
                                                        0 1 0 0 0  
                                                        0 0 1 0 0  
                                                        0 0 0 21 -7" result="goo"></feColorMatrix>
                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}