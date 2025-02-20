import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        
        
        //   400: '#89F336',
        // },
        yellow: {
          600: '#636B2F',
          500: '#BAC095',
          400: '#3D4127',
        },
       
        purple: {
          600: '#9B5DE5',
          500: '#8E44AD',
          400: '#C084FC',
        },
        pink: {
          600: '#FF6F91',
          500: '#FF5370',
          400: '#FF8FAD',
        },
        red: {
          600: '#FF5C5C',
          500: '#FF3D3D',
          400: '#FF7A7A',
        },
        
        blue: {
          600: '#00CFFF',
          500: '#007BFF',
          400: '#66E0FF',
        },
        green: {
          600: '#2E6F40',
          500: '#68BA7F',
          400: '#253D2C',
        },
        
    
      
        gray:{
       100: ' #71797E'
        }
      },
      animation: {
        "subtle-zoom": "subtle-zoom 20s ease-out forwards",
        "water-reflection": "water-reflection 10s ease-in-out infinite",
      },
      keyframes: {
        "subtle-zoom": {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "water-reflection": {
          "0%, 100%": {
            background: "linear-gradient(0deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
          },
          "50%": {
            background: "linear-gradient(0deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
}

export default config