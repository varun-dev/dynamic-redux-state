const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  devServer: {
    port:9000,
    contentBase: path.resolve(__dirname, "docs/")
  },
  output: {
    path: path.join(__dirname + '/docs'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    // Necessary b/c golden-layout depends on all 3 of these libs via UMD globals
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  stats: 'errors-only'
}
