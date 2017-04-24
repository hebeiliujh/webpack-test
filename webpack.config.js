// path 是nodejs API中的一个模块
// NodeJS官网： http://nodejs.cn/doc/node/index.html
const path = require('path');
module.exports = {
  entry: {
    main: './app/js/main.js',
    bar1: './app/js/bar1.js'
  },
  output: {
    // name, chunkhash等配置项在： https://webpack.js.org/configuration/  output->filename选项卡里面
    // chunkhash:5   hash值取前5位
    filename: 'js/[name]-[chunkhash:5].js',

    // resolve是path模块中的一个方法
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://cdn.com/'
  }
}