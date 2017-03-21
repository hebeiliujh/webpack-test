const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: './app/js/main.js',
    bar1: './app/js/bar1.js',
    bar2: './app/js/bar2.js',
    bar3: './app/js/bar3.js'
  },
  output: {
    filename: 'js/[name]-[chunkhash:5].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://cdn.com/'
  },
  resolve: {
  	modules: [
	  	path.join(__dirname, 'app'),
	  	"node_modules"
	  ]
  },
  module: {
  	rules: [
  		{
  			test: /\.scss$/,
  			use: ExtractTextPlugin.extract({
          use: ["css-loader","sass-loader"],
          // use style-loader in development 
          fallback: "style-loader"
        }),
  		}
  	]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.css'
    }),
    new htmlWebpackPlugin({
      filename: 'bar1.html',
      template: 'index.html',
      inject: false,
      title: 'webpack demo bar1',
      excludeChunks: ['bar2', 'bar3']
    }),
    new htmlWebpackPlugin({
      filename: 'bar2.html',
      template: 'index.html',
      inject: false,
      title: 'webpack demo bar2',
      excludeChunks: ['bar1', 'bar3']
    }),
    new htmlWebpackPlugin({
      filename: 'bar3.html',
      template: 'index.html',
      inject: false,
      title: 'webpack demo bar3',
      excludeChunks: ['bar1', 'bar2']
    }),
  ]
}