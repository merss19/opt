const path = require('path');

module.exports = function () {
  return {
    devServer: {
      contentBase: path.resolve(__dirname, '../', 'js'),
      port: 3000,
      historyApiFallback: true,
      host: 'vpbx.mcn.loc',
      https: true
    }
  }
}
