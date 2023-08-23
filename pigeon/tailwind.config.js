/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './Dashboard/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: 'var(--background-color-light)', // Define the light background color value
      },
      textColor: {
        light: 'var(--text-color-light)', // Define the light text color value
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
