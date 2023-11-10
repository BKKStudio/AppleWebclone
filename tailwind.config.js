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
      },
      animation:{
        'animation-textslide':'animation-textslide 4s linear 1',
      },
      maxWidth: {
        '8xl': '101rem',
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
    },
  },
  plugins: [],
}
