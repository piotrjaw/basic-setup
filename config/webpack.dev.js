/* eslint-disable comma-dangle */
const merge = require('webpack-merge');

const config = require('./webpack.common');

module.exports = merge(config, {
  devtool: '#inline-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      lazy: true,
      ignored: /node_modules/,
    },
    stats: 'errors-only'
  }
});
/* eslint-enable */
