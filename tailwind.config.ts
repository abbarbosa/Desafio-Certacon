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
        primary: {
          black: '#282828',
          red: "#741D2D",
        },
        complementary: {
          white: '#E7E3E0',
        },
      },
      fontFamily: {
        chillax: ['Chillax', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
