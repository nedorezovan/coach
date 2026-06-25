/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Surfaces
        paper: "#f9f9f6",
        "paper-2": "#f3f3ef",
        "paper-3": "#ecece7",
        // Ink
        ink: "#111111",
        "ink-2": "#3c3c3c",
        "ink-3": "#6e6e6e",
        "ink-4": "#a3a3a0",
        // Lines
        rule: "rgba(17,17,17,0.12)",
        "rule-soft": "rgba(17,17,17,0.06)",
        // Accent
        accent: "#1565d9",
        "accent-hover": "#0f4cb8",
        "accent-tint": "#e7ecf3",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["PragmaticaWebBook", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "76rem",
      },
      borderRadius: {
        DEFAULT: "0",
        sm: "2px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
