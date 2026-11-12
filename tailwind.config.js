/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#03060E',
          900: '#070B19',
          800: '#0B1126',
          700: '#111A38',
        },
        navy: {
          950: '#080D1A',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        gold: {
          100: '#FDF8E7',
          200: '#F9ECC2',
          300: '#F3DB94',
          400: '#E7C664',
          500: '#D4AF37', // Champagne Gold
          600: '#B89226',
          700: '#92711A',
          800: '#6C5314',
          900: '#46360E',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 50px -10px rgba(212, 175, 55, 0.45)',
        'obsidian-card': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'float-slow': 'float 18s ease-in-out infinite',
        'float-reverse': 'floatRev 22s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(25px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
