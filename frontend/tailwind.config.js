/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef9ff",
          100: "#d8f1ff",
          200: "#b9e8ff",
          300: "#89dbff",
          400: "#52c5ff",
          500: "#2aa6ff",
          600: "#1488f5",
          700: "#0d6fe1",
          800: "#1259b6",
          900: "#154c8f",
          950: "#122f57",
        },
        dark: {
          DEFAULT: "#0a0a1a",
          100: "#0f0f23",
          200: "#141432",
          300: "#1a1a3e",
          400: "#22224a",
          500: "#2a2a56",
        },
        accent: {
          cyan: "#00d4ff",
          purple: "#7c3aed",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.4)" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
