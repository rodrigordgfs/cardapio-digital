/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CE3246',
        'primary-light': '#F15B6F',
        'primary-dark': '#CC1028',
      }
    },
  },
  plugins: [],
}