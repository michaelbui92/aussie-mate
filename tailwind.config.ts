import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#FDF8F3",
        sunset: "#E8722A",
        "sunset-light": "#FF9A5C",
        sage: "#5B8A5B",
        "sage-light": "#7DAD7D",
        eucalypt: "#2A3A2A",
        sand: "#F5EBE0",
        coast: "#6BA5B5",
        darkbg: "#1A2A1A",
        "dark-surface": "#2A3A2A",
        "dark-muted": "#A8C8A0",
        "dark-border": "#3A4A3A",
        "dark-card": "#253325",
        glass: "rgba(255, 255, 255, 0.72)",
        "glass-dark": "rgba(42, 58, 42, 0.72)",
        "glass-border": "rgba(255, 255, 255, 0.4)",
        "glass-border-dark": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
