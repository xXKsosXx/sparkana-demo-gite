import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fcf9f4",
        surface: "#fcf9f4",
        primary: "#061b0e",
        "primary-container": "#1b3022",
        "tertiary-container": "#3c2716",
        "on-surface": "#1c1c19",
        "on-surface-variant": "#434843",
        "outline-variant": "#c3c8c1",
        "surface-container": "#f0ede8",
        "surface-container-low": "#f6f3ee",
        "surface-container-lowest": "#ffffff",
        "stone-900": "#1c1a19",
      },
      fontFamily: {
        headline: ["var(--font-noto-serif)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
