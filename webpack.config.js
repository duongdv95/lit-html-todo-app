const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
       {
         test: /\.scss$/,
         use: [{
           loader: 'style-loader'
         }, {
           loader: 'css-loader'
         }, {
           loader: 'sass-loader'
         }]
       }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
      })
  ]
}