/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors : {
        customOrange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayBlue: "hsl(219, 9%, 45%)",
        grayBlue: "hsl(220, 14%, 75%)",
        lightGrayBlue: "hsl(223, 64%, 97%)",
        customWhite: "hsl(0, 0%, 98%)",
        opacBlack: "hsl(0, 0%, 0%, 85%)",
      },
      fontFamily: {
        customFont: "Kumbh Sans, sans-serif"
      },
      screens: { 
        'tablet' : '600px',
        'md': '720px',
      },

    },
  },
  plugins: [],
}
