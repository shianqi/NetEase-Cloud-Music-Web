const resolve = require('path').resolve

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: [
    // 加载 polyfills 文件
    resolve(__dirname, 'webpack.config.polyfills.js'),
    // 应用程序入口文件
    './index.jsx'
  ],

  output: {
    // 编译文件名
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    // necessary for HMR to know where to load the hot update chunks
    publicPath: './'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: [
          resolve(__dirname, './node_modules/')
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]-[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ],
        exclude: [
          // 不使用 CSS Modules
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[hash:8].[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'font/[hash:8].[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      resolve(__dirname, './node_modules')
    ],
    alias: {
      STYLES: resolve(__dirname, './style')
    },
    extensions: ['.js', '.json', '.jsx', '.css']
  }
}
