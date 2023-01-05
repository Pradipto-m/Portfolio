/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'name': ['Rosematika'],
        'head': ['Gumela']
      },
      boxShadow: {
        'neumorphCircle': ['14px 14px 26px #000114, -14px -14px 26px #000130'],
        'circleMobile': ['14px 14px 24px #000015, -14px -14px 24px #00023f'],
        'neumorphCard': ['14px 14px 24px #000110, -13px -13px 25px #000125']
      },
      backgroundImage: {
        'wave': "url('./assets/wave.png')",
        'waveMobile': "url('./assets/waveMobile.png')"
      },
      animation: {
        'color-rotate': 'colors 4s linear infinite',
      },
      keyframes: {
        colors: {
          'from': { filter: 'hue-rotate(0deg)' },
          'to': { filter: 'hue-rotate(360deg)' },
        }
      },
    },
  },
  plugins: [],
}
