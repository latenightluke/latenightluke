const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        gray: colors.slate,
        blue: {
          twitter: "#1da1f2",
        },
        indigo: colors.indigo,
        fuchsia: colors.fuchsia,
      },
      screens: {
        xs: "390px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
      borderColor: ["dark"],
      borderWidth: ["dark"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
