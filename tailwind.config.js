/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom1: '0 0 24px 0 rgba(8, 23, 53, 0.16)',
      },
      colors: {
        primary: 'rgba(255, 255, 255, 1)', // White
        secondary: 'rgba(21, 112, 239, 1)', // Blue
        text: 'rgba(8, 23, 53, 1)', // Dark
      },
    },
  },
  plugins: [],
}