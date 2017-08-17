const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const bundleConfig = require('./assets/webpack-assets.json')

module.exports = {
    // 如果有任何错误，终止编译
    bail: true,

    // 编译上下文路径
    context: resolve(__dirname, 'src'),

    entry: [
        // 加载 polyfills 文件
        resolve(__dirname, 'webpack.config.polyfills.js'),
        // 应用程序入口文件
        './index.jsx'
    ],

    output: {
        // 编译文件名加入Hash
        filename: 'bundle.[chunkhash:20].js',

        path: resolve(__dirname, 'dist'),

        // necessary for HMR to know where to load the hot update chunks
        publicPath: './'
    },

    module: {
        // 导致错误而不是警告
        strictExportPresence: true,
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: [
                        { loader: 'style-loader' }
                    ],
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                minimize: true,
                                localIdentName: '[path]-[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                }),
                exclude: [
                    //不使用 CSS Modules
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
                        loader: 'url-loader'
                    }
                ]
            }

        ]
    },

    plugins: [
        //不启动服务器，而是生成json
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsFilename: resolve(__dirname, 'assets/bundle-analyzer-stats.json')
        }),

        //分离打包css和js
        new ExtractTextPlugin('styles.[hash:20].css'),

        //定义生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                comparisons: false
            },
            output: {
                comments: false,
                // Turned on because emoji and regex is not minified properly using default
                // https://github.com/facebookincubator/create-react-app/issues/2488
                ascii_only: true
            }
        }),
        //用模板生成HTML页面
        new HtmlWebpackPlugin({
            title: 'Elevoc',
            bundleName: bundleConfig.vendor.js,
            filename: 'index.html',
            favicon: resolve(__dirname, 'template/favicon.ico'),
            template: resolve(__dirname, 'template/index.tmpl.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        })
    ],

    resolve: {
        modules: [
            resolve(__dirname, './node_modules'),
            resolve(__dirname, './style')
        ],
        extensions: ['.js', '.json', '.jsx', '.css']
    }
}
