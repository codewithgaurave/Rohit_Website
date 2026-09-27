/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6F0E7',
        primaryDark: '#17120E',
        gold: '#B88A44',
        softGold: '#D6B477',
        mutedBeige: '#D8C9B5',
        text: '#211A16',
        white: '#FFFDF9',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
