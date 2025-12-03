import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#3B82F6",
        tertiary: "#00ff99",
        accent: "#F59E0B",
        neutral: {
          100: "#F3F4F6",
          200: "#E5E7EB",
        },
        // 🎨 Paleta de marca para navbar (light/dark)
        brand: {
          50: "#eff6ff", // azul muy clarito
          100: "#dbeafe", // azul claro (light navbar)
          200: "#bfdbfe", // un poco más intenso si lo necesitás
          800: "#1e40af", // azul oscuro (borde/fondo en dark)
          900: "#1e3a8a", // azul más profundo (navbar dark)
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

export default config;
