const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './public/app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /app\.(js)$/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
}
