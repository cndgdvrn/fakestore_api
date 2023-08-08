/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gemunu': ['Gemunu Libre'],
      }, 
      colors:{
        'candreva-red':'#EF6262'
      }
    },
    
  },
  plugins: [],
}