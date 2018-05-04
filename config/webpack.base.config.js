const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')

module.exports = {
  context: path.join(__dirname, '../src'),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }
    ]
  },
  entry: {
    app: ['./script/app.js'],
    vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk']
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as (entry) {
        if (/\.css$/.test(entry)) return 'style'
        if (/\.woff$/.test(entry)) return 'font'
        if (/\.png$/.test(entry)) return 'image'
        return 'script'
      },
      include: 'allAssets'
    }),
    new ExtractTextPlugin({ filename: '[name].css' })
  ]
}
