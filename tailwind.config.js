/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#141718',
        'text-color':'#BE185D',
        
        //  #1E3A8A
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #BE185D, #1D4ED8)',
      },
      animation: {
        "gradient-move": "gradientMove 6s ease infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
}

