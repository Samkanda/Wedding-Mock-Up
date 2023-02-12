/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'fontMain':['Playfair Display'],
    },
    extend: {
      colors: {
        'primary': '#391A04',
        'secondary': '#A19588',
        'third': '#982628'
      }
    },
  },
  plugins: [],
}