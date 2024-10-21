/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes : {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)'},
          '100%': { opacity: 1, transform: 'translateY(0)'},
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s forwards',
      },
      gridTemplateColumns: {
        'pelis-grid' : 'repeat(auto-fit, minmax(200px, 1fr))',
        'pelis-grid-large' : 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [
    function({ addComponents, theme}) {
      addComponents({
        'dialog::backdrop' : {
          'background-image' : 'linear-gradient(45deg, magenta, rebeccapurple, dodgerblue, green)',
          'opacity' : '0.75',
        },
      })
    }
  ],
}

