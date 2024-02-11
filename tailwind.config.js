/** @type {import('tailwindcss').Config} */
module.exports = {
  breakpoints: {
    sm: '375px',
    md: '670px',
    lg: '768px',
    xl: '1024px',
  },
  
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
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-typewriter')({
      wordsets: {
          word: {
              words: ['Front-End', 'Developer'],
              delay: 1
          }
      }
  })  ],};
