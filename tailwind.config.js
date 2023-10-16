/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'twitter-image':"url('assets/background.jpg')"
      }
    },
  },
  plugins: [],
}

