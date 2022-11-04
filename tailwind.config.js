const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        gray: {
          50: 'hsla(240, 11%, 96%, 100%)',
          100: 'hsla(212, 32%, 80%, 100%)',
          200: 'hsla(212, 32%, 70%, 100%)',
          300: 'hsla(212, 32%, 60%, 100%)',
          400: 'hsla(212, 32%, 50%, 100%)',
          500: 'hsla(212, 32%, 40%, 100%)',
          600: 'hsla(212, 32%, 30%, 100%)',
          700: 'hsla(212, 32%, 20%, 100%)',
          800: 'hsla(212, 32%, 10%, 100%)',
          900: 'hsla(212, 32%, 5%, 100%)',
        },
        primaryTransparentBackground: 'hsla(217, 91%, 60%, 20%)',
      },
      screens:{
        'nav': '1170px',
      },
    },
  },
  plugins: [],
}
