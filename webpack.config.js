const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      template: './src/pages/about.html',
      filename: 'about.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'dist/assets/images' }
      ],
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
