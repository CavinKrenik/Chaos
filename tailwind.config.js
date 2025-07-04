/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00FFFF',
        neonPink: '#FF00FF',
        dark: '#000000',
      },
      animation: {
        pulseSlow: 'pulse 10s infinite',
        spinSlow: 'spin 10s linear infinite', // 👈 Add this line
      },
      backgroundImage: {
        stars: "url('/stars-bg.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
