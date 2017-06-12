const { resolve } = require('path')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require("extract-text-webpack-plugin")

process.env.NODE_ENV = "development"

module.exports = {
    context: resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './index.js'
        // the entry point of our app
    ],

    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    devtool: 'eval-source-map',

    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: resolve(__dirname, 'dist'),
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
                                ["es2015", {"modules": false}],
                                "react",
                                "stage-0"
                            ]
                        }
                    }
                ],
                exclude: [
                    resolve(__dirname, '/node_modules/')
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'less-loader'},
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
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
                                modules: true
                                // localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader'
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
            },

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息

        new OpenBrowserPlugin({ // 自动打开浏览器
            url: 'http://localhost:8080'
        }),

        new BundleAnalyzerPlugin(),

        new ExtractTextPlugin('styles.css')
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css']
    }
}
