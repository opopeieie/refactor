const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
  devServer: {
    allowedHosts: 'all',
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html')
  })],
};