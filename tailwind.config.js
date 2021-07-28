const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      yellow: colors.yellow,
      green: colors.green,
      pink: colors.pink,
      white: colors.white,
      blue: colors.blue,
    },
    extend: {
      colors: {
        lime: colors.lime,
        amber: colors.amber,
        teal: colors.teal,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
