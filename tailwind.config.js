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
        backFilter: "#F9F1E7"
      },
      backgroundImage: {
        'backgroudHome': "url('./src/assets/scandinavian-interior-mockup-wall-decal-background 1.png')",
        'backSubHeader' : "url('./src/assets/back-Sub-Header.png')"
        
      }
    },
    },
  plugins: [],
}

