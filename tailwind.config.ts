import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#1c1d20",
        light: "#f0f8ff",
        headerShadow: "0px 20px 60px rgba(138, 149, 158, 0.2)"
      },
    },
  },
  plugins: [],
} satisfies Config;
