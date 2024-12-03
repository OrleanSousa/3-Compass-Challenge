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
        
      }
    },
    },
  plugins: [],
}

