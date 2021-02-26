const path = require('path');
const output = path.resolve(__dirname, '../build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public', 'index.html'),
    title: 'Development',
    filename: './index.html'
  }),
];
plugins.push(new CleanWebpackPlugin());

module.exports = function () {
  return {
    mode: 'development',
    watch: true,
    output: {
      path: output,
      filename: 'main.js',
      publicPath: '/',
    },
    devtool: 'inline-source-map',
    plugins: [
      ...plugins,
      new webpack.DefinePlugin({
        isProd: false
      })
    ],
    optimization: {},
  }
}
