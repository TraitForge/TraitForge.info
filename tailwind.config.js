/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      race: ["var(--font-race)", "sans-serif"],
      monserat: ["var(--font-monserat)", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
        },
      },

      colors: {
        primary: "#0ADFDB",
        "light-blue": "rgba(20, 150, 130, 0.44)",
        "light-dark": "rgba(0, 0, 0, 0)",
      },
      boxShadow: {
        "custom-blue": "6px -4px 9.8px rgba(53, 255, 231, 0.41)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, #35FFE7 30%,  #000 10%)",
      },
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
