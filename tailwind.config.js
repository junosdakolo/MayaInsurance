/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        heroColor: 'hsla(205, 98%, 27%, 0.1)',
        SignUp: 'hsla(205, 100%, 17%, 1)',
        mayaColor: 'hsla(18, 100%, 49%, 1)',
        mainBG: 'hsla(240, 33%, 97%, 1)',
      },
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

