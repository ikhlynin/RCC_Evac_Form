/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  presets: [
    require('./src/assets/tailwind.presset')
  ],
  plugins: [],
}

