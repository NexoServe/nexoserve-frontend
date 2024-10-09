/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/public/**/*.html',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        s: '480px',
        m: '640px',
        l: '768px',
        xl: '1024px',
        xxl: '1300px',
      },
      zIndex: {
        page: 10,
        header: 20,
        modal: 30,
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',
      },
      spacing: {
        // Include any custom spacing here if needed
      },
    },
  },
  plugins: [],
};
