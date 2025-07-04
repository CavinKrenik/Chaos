module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
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
