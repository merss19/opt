/**
 * Данный конфиг исключительно для запуска прод сборки jenkins'ом
 * Для фронтов конфиг в папке webpack: Сборки: 'prod' & 'dev'
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const prod = require('./webpack/webpack-production.config.js');

const babelLoader = require('./webpack/babelLoader');
const htmlLoader = require('./webpack/htmlLoader');
const cssLoader = require('./webpack/cssLoader');
const imageLoader = require('./webpack/imageLoader');
const devServer = require('./webpack/devServer');
const resolve = require('./webpack/resolveModule');

const output = path.resolve(__dirname, 'build');

const base = merge([
  {
    entry: {
      main: './index.js',
      //shop: './react/shop/index.js'
    },
    output: {
      path: output,
      filename: '[name].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        //modules: path.resolve(__dirname, './react/src/modules/'),
        //environments: path.resolve(__dirname, './react/environments/index'),
        mcn: path.resolve(__dirname, './mcn'),
       // api: path.resolve(__dirname, './react/src/api'),
        utils: path.resolve(__dirname, './utils'),
        assets: path.resolve(__dirname, './assets'),
        //'mcn-ui-components': path.resolve(__dirname, './no'),
        //'mcn-ru-header': path.resolve(__dirname, './node_modules/mcn-ru-header/modules'),
      }
    }
  },
  babelLoader('prod'),
  htmlLoader(),
  cssLoader(),
  imageLoader('prod')
])

module.exports = function () {
  return merge([
    prod(),
    base
  ])
};