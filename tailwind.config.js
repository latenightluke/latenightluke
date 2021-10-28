const colors = require("tailwindcss/colors");

const prodUrl = "https://www.latenightluke.dev";
module.exports = {
  mode: "jit",
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
        gray: colors.coolGray,
        blue: {
          twitter: "#1da1f2",
        },
        indigo: colors.indigo,
      },
      backgroundImage: {
        lateNight: `url('${prodUrl}/bg/late-night.jpg')`,
        lateNightLukeOg: `url('${prodUrl}/bg/latenightluke-og.png')`,
        youngLukeMusicOg: `url('${prodUrl}/bg/younglukemusic-og.png')`,
        openforceOg: `url('${prodUrl}/bg/openforce-og.png')`,
      },
      screens: {
        xs: "390px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
