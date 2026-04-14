import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Outfit'", "system-ui", "sans-serif"],
      },
      colors: {
        cream: {
          50: "#FDFAF5",
          100: "#F8F1E4",
          200: "#F0E0C4",
          300: "#E5CA9F",
        },
        forest: {
          400: "#4A7C59",
          500: "#2D6A4F",
          600: "#1B4332",
          700: "#0D2B1E",
        },
        gold: {
          300: "#F4C87A",
          400: "#EAB04D",
          500: "#D4962A",
        },
        charcoal: {
          700: "#2C2C2C",
          800: "#1A1A1A",
          900: "#0D0D0D",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
