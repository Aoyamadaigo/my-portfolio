/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../**/*.php',
    './**/*.php',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
       
      },
      backgroundImage: {
        'hero-to-about': 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))',
      },
      colors: {
        primary: '#1D4ED8',
        accent: '#F59E0B',
      },
      fontFamily: {
        sawarabi: ['"Sawarabi Mincho"', 'serif'],
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

