module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#363740',
        'black-light': '#212121',
        'black-dark': '#1b1b1b',
        'brown-dark': '#292929',
        'deep-black': '#171717',
        'gray-neutral': '#808080',
        'gray-light': '#F5F5F9',
        'body-light': '#e5e7eb',
        'gray-dark': '#404040',
        'orange-base': '#FFA500',
        'orange-light': '#ECB653',
        'white-light': '#EAECF0',
        'white-dark': '#F9FAFB',
      },
      width: {
        108: '27rem',
        160: '40rem',
      },
    },
    screens: {
      sm: { max: '639px' },
      md: { max: '767px' },
      'md-lg': { max: '823px' },
      lg: { max: '1023px' },
      xl: { max: '1279px' },
      xxl: { max: '1439px' },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-shadow': {
          'box-shadow': 'inset 0 0 0 50px #fff !important',
        },
        '.custom-shadow-dark': {
          'box-shadow': 'inset 0 0 0 50px #363740 !important',
        },
      };

      addUtilities(newUtilities, ['hover', 'focus']);
    },
  ],
};
