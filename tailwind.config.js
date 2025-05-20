/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // AppVin primary colors - Modern indigo/purple
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Main brand color - Indigo
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        // AppVin secondary colors - Teal/cyan
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // Secondary brand color - Cyan
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        // AppVin accent colors - Vibrant purple
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Accent color - Purple
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.04), 0 0 8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 15px 40px rgba(0, 0, 0, 0.08), 0 0 12px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 10px rgba(99, 102, 241, 0.2)',
        'button-hover': '0 8px 20px rgba(99, 102, 241, 0.3)',
        'dark-soft': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'dark-hover': '0 8px 30px rgba(0, 0, 0, 0.3)',
        'dark-card': '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.4)',
        'dark-card-hover': '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 12px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-primary-soft': 'linear-gradient(to right, #6366f1, #a855f7)',
        'gradient-secondary': 'linear-gradient(to right, #06b6d4, #6366f1)',
        'gradient-accent': 'linear-gradient(to right, #a855f7, #ec4899)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
