const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: __dirname,
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest']
          }
        },
        include: path.resolve(__dirname, 'app'),
        exclude: path.resolve(__dirname, 'node_modules')
  		},
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.tpl$/,
        use: [
          'ejs-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: "url-loader?name=assets/[name]-[hash:5].[ext]&limit=20000"
      }
  	]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')({
            broswers: ['last 5 versions']
          })
        ]
      }
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      title: 'webpack demo'
    })
  ]
}