/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bkg: "var(--color-bkg)",
      },
      textColor: {
        color: "var(--color-text)",
      },
      colors: {
        element: "var(--color-element)",
      },
    },
    fontFamily: {
      nunito: ["Nunito Sans', sans-serif"],
    },
  },
  plugins: [],
};
