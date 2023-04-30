/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Epilogue', 'san-serif'],
    },
    colors: {
      'almost-white': 'hsl(0, 0%, 98%)',
      'medium-gray': 'hsl(0, 0%, 41%)',
      'almost-black': 'hsl(0, 0%, 8%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
}
