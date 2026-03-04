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
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#f5f0e8",
        ink: "#1a1814",
        accent: "#c45c3e",
        mute: "#6b6560",
        border: "#e0d9cf",
      },
    },
  },
  plugins: [],
};
export default config;
