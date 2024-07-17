/** @type {import('tailwindcss').Config} */

const { color } = require('framer-motion');




module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-montserrat)'],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        'custom-bg': '#f5f5f7', //Athens Grey
        'custom-black': '#000000', //Custom Black
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgb(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 100px);',
        circularDark: 'repeating-radial-gradient(rgb(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px);'

      }
    },
  },
  plugins: [],
}
