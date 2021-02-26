const path = require('path');

module.exports = function (env) {
  const ui = env === 'prod' ? '../node_modules/mcn-ui-components' : '../mcn-ui-components';
 // const header = env === 'prod' ? '../node_modules/mcn-ru-header' : '../node_modules/mcn-ru-header';
  return {
    module: {
      rules: [
        // {
        //   enforce: 'pre',
        //   test: /\.js|jsx$/,
        //   exclude: [/node_modules/, /mcn-ui-components/],
        //   loader: 'eslint-loader',
        // },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, '../index'),
            path.resolve(__dirname, ui),
            /node_modules\/signature_pad/
          ],
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }
}