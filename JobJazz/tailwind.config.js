/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gold: "#DFA100",
        contact: "#212121",
        pricing: "#1E1E1E",
        "dark-contact": "#1A1A1A",
        "blue-charcoal": "#22262A",
      },
    },
  },
  plugins: [],
};
