/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["templates/*.html", "templates/macros/*.html"],
  theme: {
    extend: {
      lineHeight: {
        '5.5': '1.4rem',
      }
    },
  },
  plugins: [],
  
}
