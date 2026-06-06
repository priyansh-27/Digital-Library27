/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#e1ebf4',
          200: '#c3d7e9',
          300: '#9bc0db',
          400: '#6ea3ca',
          500: '#4e87b6',
          600: '#3d6d9c',
          700: '#325880',
          800: '#2c4a6a',
          900: '#273e59',
          950: '#0A1F44',
        },
        accent: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          950: '#172554',
        }
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
