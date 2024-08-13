/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      anton: ["Anton", "DM Sans","sans-serif"],
    },
    extend: {
      keyframes: {
        "bounce-sm": {
          "0%,100%": {
            transform: "translateY(10px)",
          },
          "50%": {
            transform: "translateY(0px)",
          },
        },
        "firstLoad":{
          "0%":{
            transform:"translateY(-10px) ",
            opacity:"0%",
          },
          "100%":{
            transform:"translateY(10px)",
            opacity:"100%"
          }
        },
       "lift": {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "scale(1.1)", // Negative translateY to lift up
          },
          
        },
      },
      animation: {
        "bounce-sm": "bounce-sm ease-in-out 2s infinite",
        "firstLoad": "firstLoad ease-in-out 0.5s",
        "lift":"lift ease-in-out 0.5s"
      },
      colors: {
        background: "#E5E5E5",
        primary: "#4A3AFF",
        heading: "#1E1B39",
        subheading: "#6E6C83",
      },
    },
  },
  plugins: [],
};
