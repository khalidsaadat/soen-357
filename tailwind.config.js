/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      "light-pink": "#EDDAF4"
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1280px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

