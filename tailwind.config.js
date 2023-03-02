/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
      // orange: "#FCA311",
      orange: "#B49393",
      night_gradient_orange: "#80594a",
      // gradient_blue: "#1f365d"
      night_gradient_blue: "#101c31",

      day_gradient_top: "#9daebc",
      day_gradient_center: "#b39292",
      day_gradient_bottom: "#375c79",

    },

    extend: {
      backgroundImage: {
        'day_background_gradient': "linear-gradient(0deg, hsla(206, 37%, 35%, 1) 0%, hsla(0, 18%, 64%, 1) 17%, hsla(207, 19%, 68%, 1) 100%)",
        'night_background_gradient': "linear-gradient(0deg, hsla(15, 20%, 59%, 1) 0%, hsla(256, 7%, 41%, 1) 18%, hsla(218, 50%, 20%, 1) 100%)",
      },
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
