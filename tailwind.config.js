/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e9ff',
          200: '#bbd8ff',
          300: '#8ec0ff',
          400: '#5ca0ff',
          500: '#2f7dff',
          600: '#1e63db',
          700: '#184eb0',
          800: '#19448f',
          900: '#1b3b75',
          950: '#0f254a',
        },
        accent: {
          400: '#ff9f3f',
          500: '#ff8a1f',
          600: '#e96f00',
        },
      },
      fontFamily: {
        heading: ['"Sora"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(23, 60, 120, 0.10)',
      },
      backgroundImage: {
        heroGrid:
          'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.18) 0%, transparent 30%), radial-gradient(circle at 75% 15%, rgba(255, 138, 31, 0.22) 0%, transparent 28%), linear-gradient(130deg, #0f3f86 0%, #2563eb 55%, #5ca0ff 100%)',
      },
    },
  },
  plugins: [],
};