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
        kbh: {
          black: '#000000',
          pink: '#FBEEE6',  // Updated to the correct color from your logo
          white: '#FFFFFF',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
