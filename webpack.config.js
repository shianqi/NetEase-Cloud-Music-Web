const { resolve } = require('path')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vendor = require('./assets/vendor-manifest.json')
const bundleConfig = require("./assets/webpack-assets.json")

module.exports = {
    context: resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://183.175.12.144:8080',
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

    devtool: 'cheap-source-map',

    devServer: {
        hot: true,
        host: '183.175.12.144',
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
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
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
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.NamedModulesPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
            },
        }),

        // 自动打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),

        //编译文件大小分析
        new BundleAnalyzerPlugin(),

        //使用DDL
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: vendor
        }),

        //html模板替换
        new HtmlWebpackPlugin({
            title: 'React NetEast Cloud Music',
            bundleName: bundleConfig.vendor.js,
            filename: 'index.html',
            template: resolve(__dirname, 'template/index.tmpl.html')
        })
    ],
    resolve: {
        modules: [
            resolve(__dirname, './node_modules'),
            resolve(__dirname, './style')
        ],
        extensions: ['.js', '.jsx', '.css']
    }
}
