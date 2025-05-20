/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        // Updated primary colors - Blue palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main brand color - Blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Updated secondary colors - Light blue
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Secondary brand color - Light blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Accent colors - Blue
        accent: {
          50: '#eef6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Accent color - Blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Theme-specific colors
        theme: {
          'bg-light': '#ffffff',
          'bg-dark': '#0f172a',
          'text-light': '#1e293b',
          'text-dark': '#f8fafc',
          'card-light': '#f1f5f9',
          'card-dark': '#1e293b',
          'border-light': '#e2e8f0',
          'border-dark': '#334155',
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
        'button': '0 4px 10px rgba(59, 130, 246, 0.2)',
        'button-hover': '0 8px 20px rgba(59, 130, 246, 0.3)',
        'dark-soft': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'dark-hover': '0 8px 30px rgba(0, 0, 0, 0.3)',
        'dark-card': '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.4)',
        'dark-card-hover': '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 12px rgba(0, 0, 0, 0.5)',
        'blue-glow': '0 0 15px rgba(59, 130, 246, 0.5)',
        'blue-glow-lg': '0 0 30px rgba(59, 130, 246, 0.7)',
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
        'gradient-primary-soft': 'linear-gradient(to right, #3b82f6, #60a5fa)',
        'gradient-secondary': 'linear-gradient(to right, #0ea5e9, #3b82f6)',
        'gradient-accent': 'linear-gradient(to right, #3b82f6, #0ea5e9)',
        'gradient-blue': 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        'gradient-blue-dark': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        'gradient-slate': 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        'gradient-slate-dark': 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'prose',
      target: 'modern',
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1e293b',
            a: {
              color: '#3b82f6',
              textDecoration: 'underline',
              fontWeight: '500',
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            strong: {
              color: '#1e293b',
              fontWeight: '600',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: '#3b82f6',
            },
            'ul > li::marker': {
              color: '#3b82f6',
            },
            hr: {
              borderColor: '#e2e8f0',
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#1e293b',
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#3b82f6',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            h1: {
              color: '#1e293b',
              fontWeight: '800',
            },
            h2: {
              color: '#1e293b',
              fontWeight: '700',
            },
            h3: {
              color: '#1e293b',
              fontWeight: '600',
            },
            h4: {
              color: '#1e293b',
              fontWeight: '600',
            },
            code: {
              color: '#1e293b',
              backgroundColor: '#f1f5f9',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            pre: {
              backgroundColor: '#f1f5f9',
              borderRadius: '0.5rem',
              padding: '1rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            img: {
              borderRadius: '0.5rem',
            },
          },
        },
        invert: {
          css: {
            color: '#f8fafc',
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            blockquote: {
              color: '#f1f5f9',
              borderLeftColor: '#60a5fa',
            },
            h1: {
              color: '#f8fafc',
            },
            h2: {
              color: '#f8fafc',
            },
            h3: {
              color: '#f8fafc',
            },
            h4: {
              color: '#f8fafc',
            },
            'ol > li::marker': {
              color: '#60a5fa',
            },
            'ul > li::marker': {
              color: '#60a5fa',
            },
            hr: {
              borderColor: '#334155',
            },
            code: {
              color: '#f8fafc',
              backgroundColor: '#1e293b',
            },
            pre: {
              backgroundColor: '#1e293b',
            },
          },
        },
      },
    }),
  ],
}
