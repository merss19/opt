const vars = require('postcss-simple-vars');

module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('autoprefixer'),
        require('postcss-for'),
        require('postcss-nested'),
        // vars({
        //   variables: function () {
        //       return require('../variables');
        //     }
        //  })
       // { 'precss' : {} },
        //{ 'postcss-import' : {} }
    ]
  }
//   'postcss-import': {},
//   'postcss-preset-env': {},
//   'cssnano': {}