const MpxWebpackPlugin = require('@mpxjs/webpack-plugin');
// vue.config.js
module.exports = {
  parallel: false,
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
                allowTsInNodeModules: true,
                transpileOnly: true
              }
            }
          ]
        }
      ],
    }
  },
  transpileDependencies: ['@mpxjs']
}
