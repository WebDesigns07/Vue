const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        index: './src/js/index.js',
        about: './src/js/about.js'
    },
    output:{
        filename: 'js/[name]/[name].js',
        chunkFilename: 'js/[name].js'
    },
    optimization:{
        splitChunks:{
            chunks: 'all',
            name: 'vendor'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'pages/index.html',
            chunks: ['index', 'vendor'],
            inject: true
        })
    ]
}