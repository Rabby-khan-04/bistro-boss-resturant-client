/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cinzel: ["Cinzel", "serif"],
      inter: ["Inter", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      darkBlue: "#111827",
      darkGray: "#1F2937",
      white: "#ffffff",
      black: "#000000",
      gray: "#E8E8E8",
      golden: "#BB8506",
      "dark-gray": "#737373",
      rating: "#CD9003",
      gold: "#D1A054",
    },
    extend: {
      backgroundImage: {
        "featured-img": "url('./src/assets/home/featured.jpg')",
        "chef-service": "url('./src/assets/home/chef-service.jpg')",
        loginBg: "url('./src/assets/others/authentication.png')",
      },
    },
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
          error: "#B91C1C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
