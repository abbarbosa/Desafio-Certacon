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
        //cores primárias
        primary: {
          black: '#282828',
          red: "#741D2D",
        },
        //cores secundárias
        complementary: {
          white: '#E7E3E0',
        },
      },
      //fonte padrão
      fontFamily: {
        chillax: ['Chillax', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
