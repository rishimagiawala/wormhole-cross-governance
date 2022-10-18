/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wormhole-purple': '#38214B',
        'wormhole-blue' : '#13132B',
        'wormhole-pink' : '#673B76'
      },
    },
  },
  plugins: [],
}
