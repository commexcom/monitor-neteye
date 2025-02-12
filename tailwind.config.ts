import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: { max: "325px" }, // Dispositivos menores que 325px
        "2k": { min: "2560px" },
        "4k": { min: "3840px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
