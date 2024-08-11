/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "bounce-sm" :{
          "0%,100%":{
            "transform":"translateY(10px)"
          },
          "50%":{
            "transform":"translateY(0px)"
          }
        }
      },
      animation:{
        'bounce-sm':"bounce-sm ease-in-out 2s infinite"
      },
      colors:{
        background:"#E5E5E5",
        primary:"#4A3AFF",
        heading:"#1E1B39",
        subheading:"#6E6C83"
      }
    },
  },
  plugins: [],
}

