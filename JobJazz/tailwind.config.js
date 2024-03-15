/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        brockmann: ["Brockmann", "sans-serif"],
      },
      colors: {
        backgroundColor: "F3F3F3",
        purpleButtons: "B265FC",
        darkPurpleText: "916BBF",
        darkPurpleLogo: "6A1AB7",


      },
    },
  },
  plugins: [],
};
