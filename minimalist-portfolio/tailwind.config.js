/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Ibarra Real Nova', 'serif'],
        subFont: ["Open Sans", "serif"]
      },
      colors: {
        cusCyan: '#5FB4A2',
        cusDarkBlue: '#203A4C',
        cusGrayDarkBlue: '#33323D',
        cusVeryLightGrey: '#FAFAFA',
        cusLightGrey: '#EAEAEB',
        cusRed: '#F43030',
        cusMediumGrey: '#979797'
      },
      fontSize: {
        "h1" : ["50px", {
          lineHeight: '50px',
          letterSpacing: '-0.45px'
        }],
        'h2': ['40px', {
          lineHeight: '42px',
          letterSpacing: '-0.36px',
        }],
        'h3': ['32px', {
          lineHeight: '36px',
          letterSpacing: '-0.29px',
        }]
      },
      maxHeight: {
        0: '0',
        mxl: '40rem', // Adjust based on your content's maximum height
      },
      transitionProperty: {
        'max-height': 'max-height',
        'overflow': 'overflow',
      },
    },
  },
  plugins: [],
}