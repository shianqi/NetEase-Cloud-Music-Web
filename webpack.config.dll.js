const path = require('path')
const webpack = require('webpack')
const WebpackMd5Hash = require('webpack-md5-hash')
const AssetsPlugin = require('assets-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')
const assetsPath = path.resolve(__dirname, 'assets')

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'react-router-dom',
            'redux',
            'redux-thunk',
            'react-redux',
            'react-router-redux'
        ]
    },
    output: {
        path: distPath,
        filename: '[name].[chunkhash].dll.js',
        library: '[name]_lib'
    },
    plugins: [
        // 将打包环境定为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // DllPlugin 生成公共模块
        new webpack.DllPlugin({
            /*
             * 定义 manifest 文件生成的位置
             * [name] 的部分由 entry 的名字替换
             */
            path: path.resolve(assetsPath, '[name]-manifest.json'),
            /*
             * name
             * dll bundle 输出到哪个全局变更上
             * 和 output.library 一样即可
             */
            name: '[name]_lib',
            context: __dirname
        }),

        //记录output中带有hash的名字，生成 webpack-assets.json 的文件
        new AssetsPlugin({
            path: path.resolve(assetsPath)
        }),

        //压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            },
            comments: false
        }),
        // 真正的文件 md5 hash
        new WebpackMd5Hash()
    ]
}
