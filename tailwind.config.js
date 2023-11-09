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
        'animation-textdown':{
          '0%':{transform:'translateY(-75%)', opacity:'0'},
          '25%':{transform:'translateY(-25%)', opacity:'25'},
          '50%':{transform:'translateY(0%)', opacity:'50'},
          '75%':{transform:'translateY(0%)', opacity:'75'},
          '100%':{transform:'translateY(0%)', opacity:'100'},
        },
        'animation-textup':{
          '0%':{transform:'translateY(0%)', opacity:'100'},
          '25%':{transform:'translateY(-25%)', opacity:'0'},
          '50%':{transform:'translateY(-75%)', opacity:'0'},
          '75%':{transform:'translateY(0%)', opacity:'0'},
          '100%':{transform:'translateY(0%)', opacity:'0'},
        },
      },
      animation:{
        'animation-textdown':'animation-textdown 1s linear 1' ,
        'animation-textup':'animation-textup 1s linear 1' ,
      },
      height: {
        '100': '26rem',
        '102': '30rem',
        '110': '52rem',
      },
    },
  },
  plugins: [],
}
