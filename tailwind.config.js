/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cmc: '#89D32A',
        cmgc: '#676767',
        title: "#313131"
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"]
      },
      backgroundImage: {
        man: "url('src/assets/man.png')",
      }
    },
  },
  plugins: [],
}

