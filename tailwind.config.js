/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '520px',

      'sm': '640px',

      'md': '768px',

      'md-lg': '992px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {},
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    }
  },
  plugins: [require('daisyui')],
}

