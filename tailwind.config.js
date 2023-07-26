/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        image: 'url("/home/bg_1.jpg")',
        image1: 'url("/home/services.jpg")',
        image2:'url("/home/coursesbanner.jpg")',
        image3:'url("/home/aboutus.jpg")',
      },

      boxShadow:{
        primary:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      }
    },
  },
  plugins: [],
};
