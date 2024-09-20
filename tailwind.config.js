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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0ADFDB",
      },
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
