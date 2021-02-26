const path = require('path');

module.exports = function () {
  return {
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'mcn-ui-components': path.resolve(__dirname, '../index'),
        modules: path.resolve(__dirname, '../modules'),
      },
    }
  }
};
