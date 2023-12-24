/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#ffb800",
        "main-red": "#ee1d00",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        monoton: ["Monoton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
