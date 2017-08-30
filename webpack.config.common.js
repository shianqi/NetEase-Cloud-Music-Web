const { resolve } = require('path')

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
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets: [
                                ['es2015', {modules: false}],
                                'react',
                                'stage-0'
                            ]
                        }
                    }
                ],
                exclude: [
                    resolve(__dirname, '/node_modules/')
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
            resolve(__dirname, './node_modules'),
            resolve(__dirname, './style')
        ],
        extensions: ['.js', '.json', '.jsx', '.css']
    }
}
