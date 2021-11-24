module.exports = {
  jit: {
    enabled: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // title font is Montserrat. body is Open Sans.
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
