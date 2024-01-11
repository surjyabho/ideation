/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lime': ['Limelight', 'sans-serif'],
        'lalezar': ['Lalezar', 'sans-serif'],
      }
    },
  },
  plugins: [],
}