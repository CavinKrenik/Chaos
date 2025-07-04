// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
  plugins: [require('@tailwindcss/forms')],
}
