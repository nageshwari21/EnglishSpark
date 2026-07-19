/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2E83',
          dark: '#082463',
          light: '#1A429E',
        },
        accent: {
          DEFAULT: '#FF6B00',
          dark: '#E05F00',
          light: '#FF8A33',
        },
        surface: '#F5F7FB',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(11, 46, 131, 0.08)',
        cardHover: '0 12px 30px rgba(11, 46, 131, 0.15)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
