/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"],
  theme: {
    extend: {

      fontFamily: {
        mont : 'Montserrat',
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        black17: 'rgba(0, 0, 0, 0.17)',
        gray50: '#9F9F9F',
        black1: '#000000',
        backOrange: '#FFF3E3',
        textblack: '#333333',
        textOrange: '#B88E2F',
        textgray: '#666666',
        backcard: "#F4F5F7",
        textcard : "#3a3a3a",
        buttonBord: '#B88E2F',
        carouselback: "#FCF8F3",
        textMid: "#616161",
        backFilter: "#F9F1E7",
        textCardB: "#898989",
        buttonShop: "#F9F1E7",
        qualitback: "#FAF3EA",
        textqualit: "#242424",
        backProduct: "rgba(184, 142, 47, 0.22)",
        starcolor: "#ffc700",
        circleroxo: "#816DFA",
        
      },
      backgroundImage: {
        'backgroudHome': "url('/fotos-furniro/bghome.png')",
        'backSubHeader' : "url('/fotos-furniro/subheaderbackgroud.png')"
        
      }
    },
    },
  plugins: [],
}

