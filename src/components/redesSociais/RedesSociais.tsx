import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

interface RedesSociaisProps {
    mobile: boolean
}

export default function RedesSociais({ mobile }: RedesSociaisProps) {
    return (
        <ul className={`${mobile ? 'grid grid-cols-5 mt-auto': 'items-center justify-center gap-2 hidden xl:flex'}`}>
            <li className="text-3xl justify-self-center">
                <Link href={'/'}>
                    <FaInstagram />
                </Link>
            </li>
            <li className="text-3xl justify-self-center">
                <Link href={'/'}>
                    <FaFacebook />
                </Link>
            </li>
            <li className="text-3xl justify-self-center">
                <Link href={'/'}>
                    <IoMailOpenOutline />
                </Link>
            </li>
            <li className="text-3xl justify-self-center">
                <Link href={'/'}>
                    <FaTiktok />
                </Link>
            </li>
            <li className="text-3xl justify-self-center">
                <Link href={'/'}>
                    <FaWhatsapp />
                </Link>
            </li>
        </ul>
    )
}