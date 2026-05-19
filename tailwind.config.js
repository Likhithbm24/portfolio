/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundOpacity: {
        '3': '0.03',
        '8': '0.08',
      },
    },
  },
  plugins: [],
}
