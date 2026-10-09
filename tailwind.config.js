/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#166534",
        secondary: "#14532d",
        dark: "#1f2937",
        light: "#f7faf7"
      }
    },
  },
  plugins: [],
}
