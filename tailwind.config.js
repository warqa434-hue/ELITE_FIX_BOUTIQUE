/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0B6E7A',
          dark: '#084E56',
          light: '#0F8A99',
        },
        amber: {
          DEFAULT: '#D4870A',
          dark: '#B07208',
          light: '#F0A318',
        },
        slate: {
          DEFAULT: '#1E2A3A',
          light: '#2D3E54',
        },
        offwhite: '#FAFAF8',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
