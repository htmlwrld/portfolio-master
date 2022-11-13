/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      sm2: "600px",
      md: "929px",
      xl: "1770px",
    },
    extend: {
      fontFamily: {
        oswald_bold: ["Oswald", "sans-serif"],
        oswald_semi: ["Oswald", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        stars: "url('../src/images/desktop/stars-bg.png')",
      },
    },
  },
  plugins: [],
};
