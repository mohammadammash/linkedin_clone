/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#8f5849",
        blue: "#2977C9",
        dark: "#1D2226",
        grey: "#86888A",
        green: "#00B900",
      },
      spacing: {
        128: "40rem",
      },
    },
  },
  plugins: [],
};
