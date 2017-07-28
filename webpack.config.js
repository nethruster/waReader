const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin'),

  isProduction = process.argv.indexOf('-p') !== -1, // Check if we are in production mode

  extractPrint  = new ExtractTextPlugin('print.css'),
  extractStyles = new ExtractTextPlugin('styles.css');

module.exports = {
  devtool: isProduction ? undefined : 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'waReader.js',
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port: 4000,
    contentBase: './src',
    stats: 'minimal',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss$/,
        exclude: /print\.scss$/,
        use: isProduction ? extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }) : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /print\.scss$/,
        use: extractPrint.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    isProduction ? extractStyles : new webpack.HotModuleReplacementPlugin(),
    extractPrint,
    new HtmlWebpackExcludeAssetsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src', 'assets', 'icons'), to: path.join(__dirname, 'dist', 'assets', 'icons') },
      { from: path.join(__dirname, 'src', 'humans.txt'), to: path.join(__dirname, 'dist', 'humans.txt') },
    ]),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.html',
      excludeAssets: [/print\.css/],
    }),
  ],
};
