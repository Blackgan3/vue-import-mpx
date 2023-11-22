const MpxWebpackPlugin = require('@mpxjs/webpack-plugin')
const path = require('path')

function resolve (file) {
  return path.resolve(__dirname, '..', file || '')
}
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MpxWebpackPlugin({
        srcMode: 'wx',
        mode: 'web'
      })
    ],
    resolve: {
      extensions: ['.mpx', '.js', '.wxml', '.vue', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.mpx$/,
          use: [
            'vue-loader',
            MpxWebpackPlugin.loader({})
          ]
        },
        {
          test: /\.ts$/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.(mpx|vue)$/],
                allowTsInNodeModules: true
              }
            }
          ]
        }
      ],
    }
  },
  transpileDependencies: ['@mpxjs']
}

