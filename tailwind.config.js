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
        info: 'hsla(217deg, 91%, 60%, 100%)',
        infoBackground: 'hsla(217deg, 91%, 60%, 0.1)',
        success: 'hsla(160deg, 100%, 40%, 100%)',
        successBackground: 'hsla(160deg, 100%, 40%, 0.1)',
        error: 'hsla(340deg, 95%, 60%, 100%)',
        errorBackground: 'hsla(340deg, 95%, 43%, 0.1)',
        warning: 'hsla(30deg, 100%, 50%, 100%)',
        warningBackground: 'hsla(38deg, 100%, 50%, 0.1)',
      },
      screens:{
        'nav': '1170px',
      },
    },
  },
  plugins: [],
}
