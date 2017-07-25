module.exports = function(env) {
  if(env) {
    return require(`./config/webpack.${env}.js`)
  } else {
    return require(`./config/webpack.dev.js`)
  }
}
