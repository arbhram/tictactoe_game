/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:[ 'Poppins']
      },
      colors:{
        backgroundColor1:"#1cc3b2",
        backgroundColor2:"#343a40",
        backgroundColor3:"#e8f1f8",
      },
    
    },
  },
  plugins: [],
}

