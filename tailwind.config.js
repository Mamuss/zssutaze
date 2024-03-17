const em = px => `${px / 16}em`;

module.exports = {
  mode: 'jit',
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  plugins: []
};
