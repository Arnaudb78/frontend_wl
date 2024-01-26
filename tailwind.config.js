/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        akira: ["Akira", "sans-serif"],
      },
      colors: {
        back: "#0E1639",
        primary: "#FE9F10",
        secondary: "#5266BC",
        txt: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
