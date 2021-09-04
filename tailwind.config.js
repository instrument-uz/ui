module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        100: "0px 4.6px 20px 3px rgba(0, 0, 0, 0.025)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
