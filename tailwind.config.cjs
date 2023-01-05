/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        736: "46rem",
      },
      fontSize: {
        "4xll": "2.5rem",
        0: "0rem",
      },
      fontFamily: {
        Inter: "Inter",
      },
      padding: {
        21: "5.125rem",
        6321: "0.421rem",
        checkbox: "0.2049rem",
      },
      colors: {
        "gray-700-figma": "#0D0D0D",
        "gray-100-figma": "#F2F2F2",
        "gray-200-figma": "#D9D9D9",
        "gray-300-figma": "#333333",
        "gray-400-figma": "#808080",
        "gray-500-figma": "#262626",
        "blue-dark-figma": "#1E6F9F",
        "blue-figma": "#4EA8DE",
        "purple-figma": "#8284FA",
        "purple-dark-figma": "#5E60CE",
        "danger-figma": "#E25858",
        "blue-dark-transparent-figma": "rgba(30, 111, 159,0.2)",
      },
    },
  },
  plugins: [],
};
