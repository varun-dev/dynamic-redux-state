import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default () => ({
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // webpack dev server host and port
    path.join(__dirname, 'src/index.js'), // entry point of app
  ],
  output: {
    path: path.join(__dirname + '/dist'),
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
      ReactDOM: 'react-dom',
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false, // Tells webpack not to use the .babelrc file
            presets: [
              ['babel-preset-env', {
                "targets": {"firefox": 52, "chrome": 55},
                "modules": false,
                "loose": true
              }],
              'react' // Transform JSX into React.createElement calls
            ]
          },
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
  devtool: 'source-map'
});
