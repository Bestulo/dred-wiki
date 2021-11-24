module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // title font is Montserrat. body is Open Sans.
        // title: ["Montserrat", "sans-serif"],
        // body: ["Open Sans", "sans-serif"],
        // title font is Crimson Pro. body is Work Sans.
        title: ["Crimson Pro", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
