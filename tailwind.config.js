/** @type {import('tailwindcss').Config} */
export default {
  content: ['./main.js', './index.html'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      quote: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        // ### Primary
        'Light-Cyan': 'hsl(193, 38%, 86%)',
        'Neon-Green': 'hsl(150, 100%, 66%)',
        // ### Neutral
        'Grayish Blue': 'hsl(217, 19%, 38%)',
        'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
        'Dark-Blue': 'hsl(218, 23%, 16%)',
      },
    },
  },
  plugins: ['tailwindcss'],
}
