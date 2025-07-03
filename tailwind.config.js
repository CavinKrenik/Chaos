// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00ffff',
        neonPink: '#ff00ff',
        dark: '#0a0a0a',
      },
    },
  },
  plugins: [],
};
