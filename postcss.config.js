const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require('cssnano')({
      autoprefixer: false,
      discardComments: { removeAll: true }
    }),
    postcssPresetEnv({ stage: 0 }),
    require('autoprefixer')
  ]
};
