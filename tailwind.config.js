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
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: [
      {
        base: {
          "primary-100": "#eef4ed",
          "primary-500": "#3d6642",
          "primary-focus": "#fff",
          "primary-content": "#fff",
          "secondary-100": "#faf5e9",
          "secondary-400": "#F2CF79",
          "secondary-500": "#E47340",
          "secondary-focus": "#fff",
          "secondary-content": "#fff",
          accent: "#3d6642",
          "accent-focus": "#fff",
          "accent-content": "#fff",
          neutral: "#191D24",
          "neutral-focus": "#fff",
          "neutral-content": "#fff",
          "base-100": "#fff",
          "base-200": "#fff",
          "base-400": "#7e7e7e",
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
