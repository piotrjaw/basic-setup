/* eslint-disable comma-dangle */
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = require('./webpack.common');

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      parallel: true
    }),
    new ExtractTextPlugin('[name]-[hash:6].css'),
  ]
});
/* eslint-enable */
