/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#2F164F",
        "main-yellow": "#ffb800",
        "main-red": "#ee1d00",
        "main-white": "#f5f5f5",
        "main-background-text": "rgba(255, 255, 255, 0.1)",
        "main-card-background": "rgba(20, 20, 27, 0.15)",
        "main-card-background-light": "rgba(47, 22, 79, 0.15)",
      },
      fontFamily: {
        main: ["Agrandir", "sans-serif"],
        second: ["Ermilov", "sans-serif"],
        grotesk: ["Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
