/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        grotesk: ['Familjen Grotesk', 'sans-serif'],
        inter: ["Inter Tight", 'sans-serif'],
        syne: ["Syne", 'sans-serif'],
        mono: ["Space Mono", 'monospace']
      },

      colors: {
        blue: "#1C47FF",
        pink: "#D6A3FB",
        green: "#D0FF94",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#E5E5E5",
        purple: "#290038",
        
      },

      
    },
  },
  plugins: [],
}

