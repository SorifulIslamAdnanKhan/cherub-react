const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        homeOnePrimary: "#C9F31D", //Home One primary color
        homeTwoPrimary: "#FB6B49", //Home Two primary color
        homeThreePrimary: "#675AE8", //Home Three primary color
      },
      animation: {
        "spin-slow": "spin 1.8s linear infinite",
        "spin-reverse": "spin 1.8s linear infinite reverse",
        float: "float 4s ease-in-out infinite",
        rotate: "rotate 10s linear infinite",
        "slide-down": "slide-down 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        rotate: {
          "0%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(360deg)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-20px)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
