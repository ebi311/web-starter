/* eslint-disable */
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  // watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    watchContentBase: true,
    open: true,
  },
});
