/* eslint-disable comma-dangle */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
const distPath = path.resolve(rootPath, 'dist');

module.exports = {
  context: path.resolve(rootPath, 'src'),
  entry: {
    app: './app.js'
  },

  output: {
    path: distPath,
    filename: '[name]-[hash:6].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
              'stage-0'
            ]
          }
        }
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(rootPath, 'src'),
      path.resolve(rootPath, 'node_modules')
    ]
  },

  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: rootPath,
        verbose: true,
      }
    ),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      chunks: ['app'],
      chunksSortMode: 'dependency'
    })
  ]
};
/* eslint-enable */
