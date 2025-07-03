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
      backgroundImage: {
        stars: "url('/stars.svg')",
      },
      animation: {
        pulseSlow: 'pulse 10s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
