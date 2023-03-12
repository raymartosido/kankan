let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js([
   'src/js/jquery.min.js',
   'src/js/app.js'
], 'assets/app.js')
   .sass('src/scss/app.scss', 'assets')
   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('tailwind.config.js') ],
   });