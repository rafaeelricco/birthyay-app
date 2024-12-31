import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
   darkMode: ['class'],
   mode: 'jit',
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/features/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
      extend: {
         container: {
            center: true,
            padding: '1rem',
            screens: {
               '2xl': '1636px'
            }
         },
         fontFamily: {
            sans: ['Inter', 'sans-serif'],
            inter: ['Inter', 'sans-serif']
         },
         colors: {
            black: {
               primary: '#34383A'
            },
            gray: {
               primary: '#868686'
            },
            gradient: {
               start: '#8a30e3',
               middle: '#ee6ba1',
               end: '#eac893'
            }
         },
         animation: {
            'shiny-text': 'shiny-text 8s infinite',
            gradient: 'gradient 8s linear infinite'
         },
         keyframes: {
            'shiny-text': {
               '0%, 90%, 100%': {
                  'background-position': 'calc(-100% - var(--shiny-width)) 0'
               },
               '30%, 60%': {
                  'background-position': 'calc(100% + var(--shiny-width)) 0'
               }
            },
            gradient: {
               to: {
                  backgroundPosition: 'var(--bg-size) 0'
               }
            }
         },
         typography: {
            sm: {
               css: {
                  hr: {
                     marginTop: '1rem',
                     marginBottom: '1rem'
                  }
               }
            },
            base: {
               css: {
                  hr: {
                     marginTop: '1rem',
                     marginBottom: '1rem'
                  }
               }
            },
            DEFAULT: {
               css: {
                  'h1, h2, h3, h4, h5, h6': {
                     fontFamily: 'Inter, sans-serif',
                     fontWeight: 600,
                     color: '#34383A'
                  },
                  hr: {
                     marginTop: '1rem',
                     marginBottom: '1rem',
                     borderTopWidth: '1px',
                     borderColor: 'rgb(229 231 235)'
                  },
                  maxWidth: 'none'
               }
            }
         }
      }
   },
   plugins: [tailwindcssAnimate, require('@tailwindcss/typography')]
}
export default config
