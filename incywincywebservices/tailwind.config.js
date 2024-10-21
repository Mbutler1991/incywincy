/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: '#C0C0C0',
        gray: '#808080',
        purple: '#6A0DAD',
        darkPurple: '#4B0082'
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #ffffff, #C0C0C0, #808080)',
        'gradient-to-l': 'linear-gradient(to left, #ffffff, #C0C0C0, #808080)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindScrollbar],
}

