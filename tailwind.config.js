// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-[radial-gradient(white_1px,transparent_1px)]',
    '[background-size:2px_2px]',
  ],
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
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.12' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
