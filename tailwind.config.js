/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#FDFEFF",
        bgDark: "rgb(17,17,17,100%)",

        fulvous: "#e58a00",
        cgRed: "#e23a3a",
        silverSand: "#C6C6C6",
        quickSilver: "#A7A7A7",

        textLight: "#000033",
        textDark: "#FBF5F3",

        modalBackdrop: "rgba(51, 51, 51, 0.3)",

        white: "#FFFFFF",
        white2: "#FDFCFF",
        black: "#000000",
      },
      boxShadow: {
        modal: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
      },
      keyframes: {
        show: {
          "0%": { opacity: 0, transform: "translateY(min(100px, 5vh))" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        hide: {
          "0%": { opacity: 1, transform: "translateY(0%)" },
          "100%": { opacity: 0, transform: "translateY(min(100px, 5vh))" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        modalOpen: "show 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
        modalClose: "hide 150ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
        loader: "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
