/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlue: "#111827",
      darkGray: "#1F2937",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EEFF25",
          secondary: "#D99904",
          accent: "#1F2937",
          neutral: "#151515",
          "base-100": "#FFFFFF",
          info: "#9FC5E5",
          success: "#4DEADD",
          warning: "#B08611",
          error: "#F24A82",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};