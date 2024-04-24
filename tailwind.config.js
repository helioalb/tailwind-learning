/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#00FF00'
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
          '0%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        floatUp: 'floatUp 2s infinite'
      }
    },
  },
  plugins: [],
}

