import { AiTwotoneSchedule } from "react-icons/ai";
import { FaQuestionCircle, FaUserAlt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdContactPhone, MdMiscellaneousServices } from "react-icons/md";

const menuItems = [
    { label: "Home", icon: <FaHouseChimney />, href: "/" },
    {
        label: "Serviços", icon: <MdMiscellaneousServices />, children: [
            { label: "Preços", href: "/" },
            { label: "Lavagem", href: "/" },
            { label: "Secagem", href: "/" },
            { label: "Passadoria", href: "/" },
            { label: "Combos", href: "/" },
            { label: "Planos Mensais", href: "/" },
            { label: "Coleta e Entrega", href: "/" },
        ]
    },
    { label: "Área do Usuário", icon: <FaUserAlt />, href: "/usuario" },
    { label: "Agendamento/Solicite Coleta", icon: <AiTwotoneSchedule />, href: "/" },
    { label: "Contato", icon: <MdContactPhone />, href: "#contato" },
    { label: "FAQ", icon: <FaQuestionCircle />, href: "#faq" },
]

export default menuItems