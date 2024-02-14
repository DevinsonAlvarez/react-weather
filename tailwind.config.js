/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5BC0BE",
        secondary: "#3A506B",
        info: "#38bdf8",
        success: "#22c55e",
        warning: "#eab308",
        danger: "#ef4444",
        base: "#1C2541",
        dark: "#0B132B",
        white: "#FFFFFF",
        black: "#020617",
      },
    },
  },
  plugins: [],
};
