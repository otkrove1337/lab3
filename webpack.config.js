const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/news.html',
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/rozklad.html',
      filename: 'rozklad.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/photo.html',
      filename: 'photo.html',
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
      },
    compress: true,
    port: 8080,
  },
};
