const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "DM Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
          "sans-serif",
        ],
      },
      colors: {
        black: "#090B10",
        pitchBlack: "#000000",
        gray: colors.coolGray,
        blue: {
          twitter: "#1da1f2",
        },
        rose: colors.rose,
      },
      backgroundImage: {
        "late-night": "url('/bg/late-night.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
