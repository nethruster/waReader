const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production'; // Check if we are in production mode

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: APP_DIR + '/index.js'
  },
  target: 'web',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /preact-scroll-viewport|unistore|anchorme|preact-html|preact|preact-compat|decko|react-ink|react-router-dom|whatsapp-chat-parser-alt/,
          chunks: 'initial',
          name: 'vendor'
        }
      }
    }
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name]-[hash:6].js',
    chunkFilename: '[name]-[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: APP_DIR,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'wdr-[hash:6]',
              minimize: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash:6]'
        }
      },
      {
        test: /\.(woff2|woff)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]?[hash:6]'
        }
      }
    ]
  },
  devServer: {
    contentBase: APP_DIR,
    compress: true,
    historyApiFallback: true,
    stats: 'minimal',
    hot: true,
    inline: true,
    port: 8081,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    },
    modules: [APP_DIR + '/shared-assets', 'node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractCssChunks({
      filename: '[name]-[hash:6].css',
      chunkFilename: '[name]-[hash:6].css',
      hot: true,
      cssModules: true
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      },
      template: APP_DIR + '/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(APP_DIR, 'assets'),
        to: path.join(BUILD_DIR, 'assets')
      }
    ])
  ]
};
