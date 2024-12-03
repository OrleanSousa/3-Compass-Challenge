/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"],
  theme: {
    extend: {

      fontFamily: {
        mont : 'Montserrat',
        Poppins: ['Poppins', 'sans-serif']
      }
    },
    },
  plugins: [],
}

