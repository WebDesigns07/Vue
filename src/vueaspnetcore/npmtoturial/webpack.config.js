const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var htmlPages = glob.sync('./src/*.html')
    .map(path => {
        // path example: ./src/index.html
        var name = path.replace('./src/', '').replace('.html', '');
        return new HtmlWebpackPlugin({
            template: path,
            filename: `pages/${name}.html`,
            chunks: [name, 'vendor'],
            inject: true
        });
    })

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
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     filename: 'pages/index.html',
        //     chunks: ['index', 'vendor'],
        //     inject: true
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/about.html',
        //     filename: 'pages/about.html',
        //     chunks: ['about', 'vendor'],
        //     inject: true
        // })
    ].concat(htmlPages)
}