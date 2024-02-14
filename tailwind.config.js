/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#a855f7",
        info: "#38bdf8",
        success: "#22c55e",
        warning: "#eab308",
        danger: "#ef4444",
        dark: "#0f172a",
        white: "#f1f5f9",
        black: "#020617",
      },
    },
  },
  plugins: [],
};
