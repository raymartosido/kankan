/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    content: [
      './config/*.json',
      './layout/*.liquid',
      './assets/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
      './templates/*.liquid',
      './templates/*.json',
      './templates/customers/*.liquid',
    ],
    theme: {
      extend: {
        colors: {
          'default-bg': '#f6f6f6',
          'default-border': '#d1d1d1',
        }
      },
    },
    plugins: [],
  }
  