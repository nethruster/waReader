const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production' // Check if we are in production mode

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: APP_DIR + '/index.tsx'
  },
  target: 'web',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /preact|preact-compat|decko|react-ink/,
          chunks: 'initial',
          name: 'vendor',
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
        test: /\.tsx?$/,
        include: APP_DIR,
        use: ['babel-loader', 'awesome-typescript-loader']
      },
      {
        test: /\.scss$/,
        use: [
          ExtractCssChunks.loader,

          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              localIdentName: 'wdr[hash:6]',
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
    modules: [APP_DIR + '/shared-assets', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
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
    })
  ]
}
