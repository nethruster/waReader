const Merge = require('webpack-merge'),
  CommonConfig = require('./webpack.common.js'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = Merge(CommonConfig, {
  devtool: undefined,
  rules: [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      })
    }
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })]
})
