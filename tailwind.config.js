/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'teal': '#0b545b',
          'yellow': '#f1c40f',
          'orange-light': '#f2ae1b',
          'orange': '#f59f10',
          'white': '#ffffff'
        }
      }
    },
  },
  plugins: [],
};