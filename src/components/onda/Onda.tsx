interface OndaProps {
    invertido: boolean
    primeiraOnda?: boolean
}

export default function Onda({ invertido, primeiraOnda }: OndaProps) {
    return (
        <div className={`relative w-full overflow-hidden leading-none ${primeiraOnda ? '-mt-20 lg:-mt-24' : ''}`}>
            <svg
                className={`block w-full h-20 md:h-32 lg:h-40 ${invertido ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#002278"
                    d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,144C1248,160,1344,224,1392,256L1440,288V0H0Z"
                ></path>
            </svg>
        </div>
    )
}