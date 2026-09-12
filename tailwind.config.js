/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F4F2FF',
          100: '#EAE6FE',
          200: '#D6CEFD',
          300: '#B8A8FB',
          400: '#9478F6',
          500: '#6C5CE7',
          600: '#5F3DC4',
          700: '#5028AA',
          800: '#401C88',
          900: '#34166E',
        },
        slate: {
          850: '#151F32',
          950: '#0B0F19',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(108, 92, 231, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 20px 35px -8px rgba(108, 92, 231, 0.15)',
      }
    },
  },
  plugins: [],
}
