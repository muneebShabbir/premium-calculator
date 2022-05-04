module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  content: [],
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  theme: {
    extend: {},
  },
  plugins: [],
}