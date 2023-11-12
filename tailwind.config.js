/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'comfortaa': ['Comfortaa', 'cursive'],
        'sriracha': ['Sriracha', 'cursive'],
        'anuphan': ['Anuphan', 'sans-serif'],
        'poppins':['Poppins','sans-serif'],
        'IBM': ['IBM Plex Sans Thai', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '20px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      keyframes:{
        'animation-textslide': {
          '0%': { transform: 'translateY(-110%)', backgroundColor: "rgb(2 132 199) ", color:'white' ,},
          '10%': { transform: 'translateY(-100%)', backgroundColor: "rgb(2 132 199) ", color:'white',},
          '20%': { transform: 'translateY(-40%)', backgroundColor: "rgb(2 132 199) ", color:'white',},
          '30%': { transform: 'translateY(-10%)', backgroundColor: "rgb(2 132 199) ", color:'white',},
          '40%': { transform: 'translateY(0%)', backgroundColor: "rgb(2 132 199) ", color:'white',},
          '50%': { transform: 'translateY(0%)', backgroundColor: "rgb(2 132 199) ", color:'white',},
          '60%': { transform: 'translateY(0%)', backgroundColor: "rgb(2 132 199) ", color:'white',},
          '70%': { transform: 'translateY(0%)', backgroundColor: "rgb(2 132 199) ", color:'white',},
          '80%': { transform: 'translateY(0%)', backgroundColor: "rgb(2 132 199) ", color:'white',},
          '90%': { transform: 'translateY(0%)', backgroundColor: "white", color:'black',},
          '100%': { transform: 'translateY(0%)', backgroundColor: "white ", color:'black',},
        },
        'animation-manu':{
          '0%':{width:'480px'},
          '25%':{width:'482px'},
          '50%':{width:'484px'},
          '75%':{width:'486px'},
          '100%':{width:'488px'}
        },
      },
      animation:{
        'animation-textslide':'animation-textslide 4s linear 1',
        'animation-manu':'animation-manu 1s ease-in infinite' ,
      },
      maxWidth: {
        'mg':'30rem',
        '8xl': '101rem',
        '9xl': '103rem',
      },
      maxHeight: {
        'mg': '30rem',
        'mg': '30rem',
      },
      height: {
        '100': '26rem',
        '102': '30rem',
        '110': '52rem',
      },
      colors: {
        'regal-blue': '#243c5a',
      },
      important:true,
      width: {
        '102': '30rem',
        '103': '31rem',
      },
      borderRadius: {
        'xl':'2rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      scale: {
        '104': '1.02',
      }
    },
  },
  plugins: [],
}
