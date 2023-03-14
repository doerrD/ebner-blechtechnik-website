/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../content/**/*.md", "../../layouts/**/*.html", "layouts/**/*.html"],
  theme: {
    extend: {
      lineHeight: {
        '5.5': '1.4rem',
      }
    },
  },
  plugins: [],
  
}
