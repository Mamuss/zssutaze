const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .webpackConfig({
    plugins: [
      new webpack.DefinePlugin({
        __VUE_I18N_FULL_INSTALL__: 'false',
        __VUE_I18N_LEGACY_API__: 'false',
        __INTLIFY_PROD_DEVTOOLS__: 'false',
      }),
    ],
  })
  .js('resources/js/app.js', 'public/js')
  .extract()
  .vue(3)
  .postCss('resources/css/app.css', 'public/css', [require('tailwindcss')])
  .alias({
    '~': path.join(__dirname, 'resources/js'),
    '@': path.join(__dirname, 'resources/css'),
  })
  .browserSync({
    proxy: 'localhost:8000',
    port: 3000,
  })
  .version();
