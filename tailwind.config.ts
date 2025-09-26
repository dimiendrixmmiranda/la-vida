import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			amarelo: 'var(--amarelo)',
  			["amarelo-claro"]: 'var(--amarelo-claro)',
  			["azul-escuro"]: 'var(--azul-escuro)',
  			["azul-medio"]: 'var(--azul-medio)',
  			azul: 'var(--azul)',
  			laranja: 'var(--laranja)',
  			preto: 'var(--preto)',
  			magenta: 'var(--magenta)',
  			turquesaEscuro: 'var(--turquesaEscuro)',
  			turquesaClaro: 'var(--turquesaClaro)',
  			turquesaMedio: 'var(--turquesaMedio)',
  			salmao: 'var(--salmao)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontFamily: {
  		primaria: [
  			'var(--fonte-primaria)',
  			'sans-serif'
  		],
  		secundaria: [
  			'var(--fonte-secundaria)',
  			'sans-serif'
  		],
  		terciaria: [
  			'var(--fonte-terciaria)',
  			'sans-serif'
  		],
  		cursiva: [
  			'var(--fonte-cursiva)',
  			'sans-serif'
  		]
  	},
  	screens: {
  		sm: '425px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1440px',
  		'3xl': '1800px'
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
