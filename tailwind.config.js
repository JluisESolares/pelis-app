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
    function({ addComponents }) {
      addComponents({
        /* dialog : {
          opacity: 0,
          transform: 'translateY(0)',
          transition: 
          'opacity 0.3s ease-out, '
          + 'transform 0.3s ease-out, '
          + 'overlay 0.3s ease-out allow-discrete, '
          + 'display 0.3s ease-out allow-discrete'
        },
        'dialog[open]' : {
          opacity: 1,
          transform: 'translateY(25px)',
          '@starting-style' : {
            opacity : 0,
            transform: 'translateY(0)'
          },
        }, */
        'dialog::backdrop' : {
          'background-color' : 'rgb(0 0 0 / 0%)',
          transition : 
            'display 0.3s allow-discrete, '
            + 'overlay 0.3s allow-discrete, '
            + 'background-color 0.3s'
        },
        'dialog[open]::backdrop' : {
          'background-color' : 'rgb(0 0 0 / 40%)',
          '@starting-style' : {
            'background-color' : 'rgb(0 0 0 / 0%)',
          }
        },
      })
    }
  ],
}

