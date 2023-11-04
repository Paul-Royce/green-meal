/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgMeal: "#f4f3ee"
      },
      colors: {
        fyloCyan: "hsl(176, 68%, 64%)"
      },
    },
  },
  plugins: [],
}

