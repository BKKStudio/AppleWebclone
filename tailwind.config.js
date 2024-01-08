/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        sriracha: ["Sriracha", "cursive"],
        anuphan: ["Anuphan", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        IBM: ["IBM Plex Sans Thai", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "20px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        footer: "200px minmax(900px, 1fr) 100px",
      },
      keyframes: {
        "animation-textslide": {
          "0%": {
            transform: "translateY(-110%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "10%": {
            transform: "translateY(-100%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "20%": {
            transform: "translateY(-40%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "30%": {
            transform: "translateY(-10%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "40%": {
            transform: "translateY(0%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "50%": {
            transform: "translateY(0%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "60%": {
            transform: "translateY(0%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "70%": {
            transform: "translateY(0%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "80%": {
            transform: "translateY(0%)",
            backgroundColor: "rgb(2 132 199) ",
            color: "white",
          },
          "90%": {
            transform: "translateY(0%)",
            backgroundColor: "white",
            color: "black",
          },
          "100%": {
            transform: "translateY(0%)",
            backgroundColor: "white ",
            color: "black",
          },
        },
        "animation-manu": {
          "0%": { width: "480px" },
          "25%": { width: "482px" },
          "50%": { width: "484px" },
          "75%": { width: "486px" },
          "100%": { width: "488px" },
        },
        "slide-img": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "animation-slidehome": {
          "0%": {
            opacity: "0",
            transform: "translateY(110%)",
          },
          "10%": {
            opacity: "10",
            transform: "translateY(100%)",
          },
          "20%": {
            opacity: "20",
            transform: "translateY(40%)",
          },
          "30%": {
            opacity: "30",
            transform: "translateY(10%)",
          },
          "40%": {
            opacity: "40",
            transform: "translateY(0%)",
          },
          "50%": {
            opacity: "50",
            transform: "translateY(0%)",
          },
          "60%": {
            opacity: "60",
            transform: "translateY(0%)",
          },
          "70%": {
            opacity: "70",
            transform: "translateY(0%)",
          },
          "80%": {
            opacity: "80",
            transform: "translateY(0%)",
          },
          "90%": { opacity: "90", transform: "translateY(0%)" },
          "100%": {
            opacity: "100",
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        "animation-textslide": "animation-textslide 4s linear 1",
        "animation-manu": "animation-manu 1s ease-in infinite",
        "slide-img": "slide-img 1s ease-in alternate",
        "animation-slidehome": "animation-slidehome 4s linear 1",
      },
      maxWidth: {
        mg: "30rem",
        "8xl": "101rem",
        "9xl": "103rem",
      },
      maxHeight: {
        mg: "30rem",
        "2xl": "47rem",
        Manu: "100rem",
      },
      width: {
        62: "17rem",
        70: "289px",
        100: "34rem",
      },
      height: {
        100: "29rem",
        102: "31rem",
        103: "37.5rem",
        105: "44rem",
        110: "52rem",
      },
      colors: {
        "regal-blue": "#243c5a",
        "white-gray": "#fbfbfd",
      },
      important: true,

      borderRadius: {
        xl: "2rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      scale: {
        104: "1.02",
      },
      backgroundImage: {
        iphone15:
          "url('https://www.apple.com/v/home/bh/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg')",
      },
      scale: {
        175: "1.75",
        200: "2.00",
        275: "2.75",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
