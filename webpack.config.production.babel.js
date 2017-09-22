import { resolve } from 'path'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import bundleConfig from './assets/webpack-assets.json'
import common from './webpack.config.common.js'

export default {
    context: common.context,

    entry: common.entry,

    // 如果有任何错误，终止编译
    bail: true,

    output: {
        ...common.output,
        // 编译文件名加入Hash
        filename: 'bundle.[chunkhash:20].js'
    },

    module: {
        // 导致错误而不是警告
        strictExportPresence: true,
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
                            name: 'images/[chunkhash:8].[name].[ext]'
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

    plugins: [
        //不启动服务器，而是生成json
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsFilename: resolve(__dirname, 'assets/bundle-analyzer-stats.json')
        }),

        //分离打包css和js
        //contenthash 分离 css 和 js 时分别计算 hash
        new ExtractTextPlugin('styles.[contenthash:20].css'),

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
            title: 'React NetEast Cloud Music',
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
