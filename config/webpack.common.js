const webpack = require('webpack'),
path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin'),
ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractPrint = new ExtractTextPlugin('print.css');

module.exports = {
  devtool: 'cheap-module-source-map',  
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: 'waReader.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 4000,
    inline: true,
    stats: 'minimal',
    contentBase: './src'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.scss$/,
        exclude: /print\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /print\.scss$/,
        use: extractPrint.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    extractPrint,
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "..", "src", "assets", "icons"), to: path.join(__dirname, "..", "dist", "assets", "icons") },
      { from: path.join(__dirname, "..", "src", "humans.txt"), to: path.join(__dirname, "..", "dist", "humans.txt") }
    ]),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html'
    })
  ]
}
