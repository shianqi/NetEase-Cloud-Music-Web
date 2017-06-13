const { resolve } = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')

module.exports = {
    context: resolve(__dirname, 'src'),

    entry: [
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
        new BundleAnalyzerPlugin(),
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css']
    }
}
