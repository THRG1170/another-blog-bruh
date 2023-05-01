/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '0.5px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        'primary': '#14279B',
        'secondary': '#3D56B2',
        'third': '#5C7AEA',
        'fourth': '#E6E6E6',
      },
      fontFamily: {
        'ubuntu': 'Ubuntu, sans-serif', 
      },
    },
  },
  plugins: [],
}
