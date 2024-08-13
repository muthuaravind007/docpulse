/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include paths to all your components
  ],
  theme: {
    extend: {
      translate: {
        '9': '2.25rem',
      },
    },
  },
  plugins: [],
};

