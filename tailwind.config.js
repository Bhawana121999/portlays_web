const { type } = require('os');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        heading: '28px',
        mainHeading: '40px',
      },
      colors: {
        mainHeadingColor: '#1B1C1E',
        headingColor: '#0F1F1B',
        paraColor: '#767676',
        primaryColor: '#255F8D',
        secondaryColor: '#EB671E',
      },
      backgroundColor: {
        primaryBgColor: '#255F8D',
        secondaryBg: '#EB671E',
      }

    },

  },
  plugins: [

  ],
}


