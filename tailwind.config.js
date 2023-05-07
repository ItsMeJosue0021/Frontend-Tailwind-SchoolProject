/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xsm: '400px',
      sm: '480px',
      smd: '600px',
      md: '900px',
      lg: '1000px',
      xl: '1440px'
    },
    extend: {
      colors: {
        gunmetal: '#2A2E33ff',
        cultured: '#EFEFEFff',
        brownsugar: '#A46A4Cff',
        lavendergray: '#BEC2CEff',
        bistre:' #42332Bff',
        gray: '#495057',
        lightgray: '#6c757d',
        lightbrown: '#E2DEDA',
        white: '#ffffff',
      },

      height: {
        '650': '650px',
        '120px': '120px',
      },
      
      width: {
        '480': '480px',
        '120px': '120px',
        '1px': '1px',
        '2px': '2px'
      },

      spacing: {
        '10px': '30px',
      },
      
      inset: {
        '-8px': '-8px',
        '80px':'80px'
      }
      
    },
  },
  plugins: [],
}
