import defaultTheme from "tailwindcss/defaultTheme";
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
        dynamicGreen: {
          50: "#eeffe4",
          100: "#d7ffc4",
          200: "#b2ff90",
          300: "#7fff50",
          400: "#3cff00",
          500: "#30e600",
          600: "#22b800",
          700: "#198b00",
          800: "#196d07",
          900: "#185c0b",
          950: "#063400",
          DEFAULT: "#3cff00",
        },
        dynamicCyan: {
          50: "#edfffe",
          100: "#c0feff",
          200: "#81fbff",
          300: "#3af8ff",
          400: "#00ffff",
          500: "#00e1e2",
          600: "#00b2b7",
          700: "#008c91",
          800: "#006c72",
          900: "#04585d",
          950: "#00343a",
          DEFAULT: "#00ffff",
        },
        accent: "var(--dyn-gradient)",
        background: "#0A0A20",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config