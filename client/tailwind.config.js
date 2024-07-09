/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      inter: ['Inter','sans-serif'],
      cinzel:['Cinzel','serif']
    },
    backgroundImage:{
      'service-bg':"url('./src/assets/home/chef-service.jpg')"
    }
  },
  plugins: [
    require('daisyui'),
  ],
}