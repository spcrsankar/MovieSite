/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        others:{'max':'1280px', 'min':'300px'}
      }
    },
  },
  plugins: [],
}

