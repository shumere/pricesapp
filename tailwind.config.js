module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "green-blue": "#089EC7",
        cyan: "#08D1C7",
        "purple-160": "#A023BA",
        "sandy-light": "#BA9023",
        "sandy-dark": "#6E5004",
        "green-main": "#34DE02",
        "green-light": "#93F50A",
        "green-dark": "#0AF520",
        "yellow-green": "#DBEB09",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
