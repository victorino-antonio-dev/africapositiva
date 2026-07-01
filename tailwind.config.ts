import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#090806", sunset: "#F97316", gold: "#FBBF24", cream: "#FFF7ED" },
      fontFamily: { sans: ["var(--font-inter)"], display: ["var(--font-sora)"] }
    }
  },
  plugins: []
} satisfies Config;
