/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue' : 'rgb(3,6,33)',
        'light-blue' : 'rgb(37,99,235)',
        'light-sky-blue' : 'rgb(2,132,199)',
        'light-black' : 'rgb(24,24,27)',
        'opacity' : 'rgba(0,0,0,0.5)'
      },
      animation: {
        open: 'open .6s ease-out forwards',
        close: 'close .6s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        modalOpen: 'modalOpen .5s linear forwards',
        modalClose: 'modalClose .5s ease-out forwards'
      },
      keyframes: {
        open: {
          '0%': { left:' -100%', opacity: '.5' },
          '100%': { left:'0', opacity: '1' }
        },
        close: {
          '0%': { left:' 0', opacity: '1', display:'block' },
          '100%': { left:'-100%', opacity: '.5' }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { tratransform: 'translateY(0)'}
        },
        modalOpen: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        modalClose: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}