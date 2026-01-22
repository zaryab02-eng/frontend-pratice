/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0a0a0b",
        secondary: "#151518",
        tertiary: "#1f1f23",
        accent: "#6366f1",
        border: "#2d2d32",
      },
    },
  },
  plugins: [],
};
