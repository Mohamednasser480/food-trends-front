/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      worthbites: ["Worthbites", "sans-serif"],
      "worthbites-rough": ["Worthbites-rough", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-100": "#F0EFEA",
        "secondary-100": "#faf5e9",
        "secondary-400": "#F2CF79",
        "base-200": "#f8f8f8",
        "base-400": "#7e7e7e",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        base: {
          primary: "#3d6642",
          "primary-focus": "#fff",
          "primary-content": "#fff",
          secondary: "#E47340",
          "secondary-focus": "#fff",
          "secondary-content": "#fff",
          accent: "#3d6642",
          "accent-focus": "#fff",
          "accent-content": "#fff",
          neutral: "#191D24",
          "neutral-focus": "#fff",
          "neutral-content": "#fff",
          "base-100": "#fff",
          "base-200": "#f8f8f8",
          "base-content": "#000",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkTheme: false,
  },
};
