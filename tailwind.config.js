const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        brand: '#228BE6',
      },
      keyframes: {
        fuwafuwa: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },

    animation: {
      fuwafuwa: 'fuwafuwa 3s ease-in-out infinite',
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
