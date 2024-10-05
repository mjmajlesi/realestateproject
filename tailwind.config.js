/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        "15" : "15rem"
      },
      width:{
        "400" : "400px"
      },
      height:{
        "450" : "450px"
      },
    },
  },
  plugins: [],
}

