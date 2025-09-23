/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument': ['"Instrument Serif"', 'serif'],
        'manrope': ['"Manrope"', 'serif'],
      },
    },
  },
  plugins: [],
}
