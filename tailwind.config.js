/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          '50': '#eefffb',
          '100': '#c6fff7',
          '200': '#8cffef',
          '300': '#4bfde6',
          '400': '#16ebd6',
          '500': '#00cebd',
          '600': '#00a69b',
          '700': '#01847e',
          '800': '#07706c',
          '900': '#0b5653',
          '950': '#003535',
        }
      }
    },
  },
  plugins: [],
}

