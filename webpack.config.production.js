const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const bundleConfig = require('./assets/webpack-assets.json')
const common = require('./webpack.config.common')

module.exports = {
    context: common.context,

    entry: common.entry,

    // 如果有任何错误，终止编译
    bail: true,

    output: {
        ...common.output,
        // 编译文件名加入Hash
        filename: 'bundle.[hash:20].js'
    },

    module: {
        // 导致错误而不是警告
        strictExportPresence: true,
        rules: [
            ...common.module.rules,
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
    resolve: common.resolve
}
