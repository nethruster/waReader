const webpack = require('webpack'),
path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',  
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'waReader.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 4000,
    inline: true,
    stats: 'minimal',
    contentBase: path.join(__dirname, 'src')
  },
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
      { from: 'humans.txt'}
    ]),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './index.html'
    })
  ]
}
