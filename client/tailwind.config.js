/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
})

