module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'bbcolor': '#009FFF',
        'bg-dark': '#1F2937',
        'bg-light': '#D1D5DB'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}