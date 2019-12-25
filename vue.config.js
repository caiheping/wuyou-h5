const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

console.log(process.env.NODE_ENV)
module.exports = {
  publicPath: './',
  lintOnSave: false,
  // 打包时不生成.map文件
  productionSourceMap: false,
  chainWebpack: (config) => {
    // 配置静态资源图片
    config.module.rules.delete('images')
    // 清除svg默认的处理方式
    config.module.rules.delete('svg')
  },
  css: {
    loaderOptions: {
      // 每个页面都会引入下面这个文件
      sass: {
        prependData: `@import "~@/static/style/mixins.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.css'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: [resolve('src/static/icons')],
          options: {
            symbolId: 'icon-[name]'
          }
        },
        {
          test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
          exclude: [resolve('src/static/icons')],
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 4096,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'img/[name].[hash:8].[ext]'
                  }
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CompressionPlugin({// gzip压缩配置
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false// 是否删除原文件
      })
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
