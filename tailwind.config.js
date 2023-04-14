/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:[ 'Poppins'],
        oregano:[ 'Oregano'],
        nepali: ['Tiro Devanagari Sanskrit'],
        aryan: ['Magnitude'], 
      },
      colors:{
        main:'#000B15',
        secondary:"#8EA7E9",
        orange:"#E14D2A"
      }
      
    },
  },
  plugins: [],
}
