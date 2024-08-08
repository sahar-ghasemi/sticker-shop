/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      lighter: "#F5F3FF",
      light: "#DDD6FE",
      primary: "#5B21B6",
      dark: "#4C1D95",
      yellow: "#eab308",
      gray: {
        100: "#F8F8F8",
        200: "#E0E0E0",
        300: "#C8C8C8",
        400: "#888888",
        500: "#707070",
        600: "#505050",
        700: "#383838",
        800: "#282828",
        900: "#101010",
      },
      green:{
        400:"#a3e635",
        500: "#84cc16",
        600: "#65a30d",
      }
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
