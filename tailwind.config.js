module.exports = {
    // darkMode: "class", // 'media' or 'class'
    content: [
      "./src/*.{html,js}",
      "./src/components/**/*.{html,js}",
    ],
    theme: {
      container: {
        padding: '1rem',
      },
      screens: {
        'xs': '350px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        'white': '#fff',
        'white-dark': '#fefefe',
        'black': '#000',
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'primary': {
          100: '#72857D',
          200: '#648B7A',
          300: '#559077',
          400: '#479574',
          500: '#399B70',
          600: '#2BA06D',
          700: '#1CA56A',
          800: '#0EAB67',
          900: '#00b064',
          1000: '#00844B',
        },
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'red': 'red',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      }
    }
}