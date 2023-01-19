/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark_blue: "#22223B",
      blue: "#4A4E69",
      light_blue: "#9A8C98",
      pink: "#C9ADA7",
      white: "#F2E9E4",
      orange: "#FCA311",
    },

    extend: {
      gridTemplateColumns: {
        16: "repeat(auto-fit, minmax(240px, 1fr))",
      },
      gridTemplateRows: {
        16: "repeat(auto-fit, minmax(240px, 1fr))",
      },
    },
  },
  plugins: [],
};
