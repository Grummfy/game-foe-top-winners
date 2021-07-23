module.exports = {
    publicPath: process.env.CI ? '/game-foe-top-winners/' : '/',
    configureWebpack: !process.env.CI ? { devtool: 'source-map', } : {},
  }