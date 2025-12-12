import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F1FAEE", // Ice
          DEFAULT: "#E63946", // Brand Red (Principal)
          hover: "#D62828", // Red Hover
          dark: "#9B2226", // Red Deep
          charcoal: "#1D3557", // Azul escuro/Preto
          slate: "#457B9D", // Acento
        },
       
        charcoal: "#1D3557", // Same as brand.charcoal
        brandLight: "#F1FAEE", // Same as brand.light
        brandHover: "#D62828", // Same as brand.hover
        brandDark: "#9B2226", // Same as brand.dark
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
