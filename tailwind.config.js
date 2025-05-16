/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // AppVin primary colors
        primary: {
          50: '#fff0f3',
          100: '#ffe0e6',
          200: '#ffc2cf',
          300: '#ff94a9',
          400: '#ff5778',
          500: '#ff2952', // Main brand color
          600: '#ff0a3c',
          700: '#d70032',
          800: '#b5002a',
          900: '#8c0021',
          950: '#4c0011',
        },
        // AppVin secondary colors (teal)
        secondary: {
          50: '#effcfa',
          100: '#d0f7f2',
          200: '#a1ede4',
          300: '#6cdcd0',
          400: '#38c4b7',
          500: '#14b8a6', // Secondary brand color
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // AppVin accent colors (blue)
        accent: {
          50: '#eef6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Accent color
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
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
        'soft': '0 2px 15px rgba(0, 0, 0, 0.03)',
        'hover': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
