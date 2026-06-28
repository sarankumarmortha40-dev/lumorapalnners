/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#000000',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#fbf7e9',
          100: '#f5ecd0',
          200: '#ebd9a3',
          300: '#e0c66f',
          400: '#d4af37',
          500: '#c19a2e',
          600: '#a07d22',
          700: '#7c6119',
          800: '#5c4813',
          900: '#3d300d',
        },
        cream: {
          DEFAULT: '#faf8f3',
          50: '#fdfcf9',
          100: '#faf8f3',
          200: '#f3efe5',
          300: '#e9e3d3',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'ultra-wide-sm': '0.25em',
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
