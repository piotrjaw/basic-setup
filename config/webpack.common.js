const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');
const distPath = path.resolve(rootPath, 'dist');

const entries = [
  'index',
  'about'
];

const plugins = [
  new CleanWebpackPlugin(
    ['dist'],
    {
      root: rootPath,
      verbose: true,
    }
  ),
];

entries.forEach((entry) => {
  plugins.push(new HtmlWebpackPlugin({
    filename: `${entry}.html`,
    template: `${rootPath}/src/pages/${entry}/${entry}.html`,
    inject: 'body',
    chunks: [`${entry}`]
  }));
});

module.exports = {
  entry: entries.reduce((prev, curr) => {
    prev[curr] = `./src/pages/${curr}/${curr}.js`;
    return prev;
  }, {}),

  output: {
    path: distPath,
    filename: '[name]-[hash:6].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  plugins: plugins
};
