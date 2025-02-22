/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        theme: "#7743DB",
        light: {
          primary: "#f9e2d2",
          secondary: "#C4A484",
        },
        dark: {
          primary: "#282828",
          secondary: "#604020",
          brown: "#432109"
        }
      }
    },
  },
  plugins: [],
};
