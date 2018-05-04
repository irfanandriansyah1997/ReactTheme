const OptimizeAssetPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  optimization: {
    minimizer: [
      new UglifyPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          mangle: {
            keep_fnames: true
          }
        }
      })
    ],
    concatenateModules: false,
    noEmitOnErrors: true,
    namedModules: true,
    namedChunks: true,
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendor',
          chunks: 'all',
          reuseExistingChunk: true,
          minChunks: 2,
          priority: 1,
          enforce: true,
          test (module, chunks) {
            const name = module.nameForCondition && module.nameForCondition()
            return chunks.some(chunk => chunk.name === 'app' && /[\\/]node_modules[\\/]/.test(name))
          }
        }
      }
    }
  },
  plugins: [new OptimizeAssetPlugin()]
}
