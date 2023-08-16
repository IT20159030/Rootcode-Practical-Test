/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        tertiary: '#6F9940',
        primary: '#4C9231',
        secondary: '#386B25',
      }
    },
  },
  plugins: [],
}

