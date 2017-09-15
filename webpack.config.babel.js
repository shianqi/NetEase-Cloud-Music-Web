import { resolve } from 'path'
import webpack from 'webpack'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import vendor from './assets/vendor-manifest.json'
import bundleConfig from './assets/webpack-assets.json'
import common from './webpack.config.common.js'

export default {
    context: common.context,
    output: common.output,

    entry: [
        // activate HMR for React
        'react-hot-loader/patch',

        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack-dev-server/client?http://localhost:8080',

        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        'webpack/hot/only-dev-server',

        ...common.entry
    ],

    devtool: 'cheap-source-map',

    devServer: {
        hot: true,
        host:'0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            ...common.module.rules
        ]
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.NamedModulesPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
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
            favicon: resolve(__dirname, 'template/favicon.ico'),
            template: resolve(__dirname, 'template/index.tmpl.html')
        })
    ],
    resolve: common.resolve
}
