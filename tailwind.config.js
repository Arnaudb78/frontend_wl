/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        akira: ["Akira", "sans-serif"],
      },
      colors: {
        back: "#5A79AE",
        back_secondary: "#94A9CD",
        primary: "#FE9F10",
        secondary: "#5266BC",
        txt: "#F0F0F0",
      },
      padding: {
        mobile: "48px 24px",
      },
    },
  },
  plugins: [],
};
