// postcss.config.cjs
module.exports = {
  plugins: {
    autoprefixer: {},
    '@tailwindcss/postcss7-compat': {
      tailwindcss: './tailwind.config.js',
    },
  },
}