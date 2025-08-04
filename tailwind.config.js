/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#B22222",
        tertiary: "#1a0000",
        textPrimary: "#ffffff",
        textSecondary: "#cccccc",
      },
    },
  },
  plugins: [],
}