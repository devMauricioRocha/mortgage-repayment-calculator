/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html, js}",
    "src/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Plus Jakarta Sans", "sans-serif"]
      }
    },
    
  },
  plugins: [],
}

