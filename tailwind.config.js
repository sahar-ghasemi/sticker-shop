/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',},
    colors:{
      lighter: "#F5F3FF",
      light: "#DDD6FE",
      primary: "#5B21B6",
      dark: "#4C1D95",
      yellow: '#eab308',

    },fontFamily:{
      roboto:['Roboto']
    }
  },
  plugins: [],
}