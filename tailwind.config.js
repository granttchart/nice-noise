/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#242d4c',
        'charcoal': '#20241f',
        'coral': '#FE5F55',
        'ruby': '#B61641',
        'periwinkle': '#3b3287',
        'violet': '#a15f8b',
        'green': '#459967',
        'white': '#fff'
      }
    },
  },
  plugins: [],
}