const path = require('path');

module.exports = function (env) {
  const ui = env === 'prod' ? '../node_modules/mcn-ui-components' : '../mcn-ui-components';
  const header = env === 'prod' ? '../react/src' : '../react/src';
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: [
            path.resolve(__dirname, ui + '/components/Icon'),
            path.resolve(__dirname, '../assets/icons'),
          ],
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          exclude: [
            path.resolve(__dirname, ui + '/components/Icon'),
            path.resolve(__dirname, '../assets/icons'),
          ],
          loader: "url-loader",
          options: {
            esModule: false
          }
        }
      ]
    }
  }
}