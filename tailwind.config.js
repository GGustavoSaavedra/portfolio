/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#3B82F6",
        accent: "#F59E0B",
        neutral: {
          100: "#F3F4F6",
          200: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        title: ["'Be Vietnam Pro'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
