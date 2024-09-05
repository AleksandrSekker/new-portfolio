/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        custom: "12px",
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Cascadia Mono",
          "Segoe UI Mono",
          "Roboto Mono",
          "Oxygen Mono",
          "Ubuntu Monospace",
          "Source Code Pro",
          "Fira Mono",
          "Droid Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
      backgroundColor: {
        "background-light": "rgb(255, 255, 255)",
        "background-dark": "rgb(31, 41, 55)",
      },
      colors: {
        foreground: {
          light: "rgb(59, 130, 246)",
          dark: "rgb(17, 24, 39)",
        },
      },
      borderColor: {
        foreground: {
          light: "rgb(59, 130, 246)",
          dark: "rgb(17, 24, 39)",
        },
      },
    },
  },
  plugins: [],
};
