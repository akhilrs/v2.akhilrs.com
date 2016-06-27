module.exports = {
    entry: './web/src/App.js',
    output: {
        path: path.resolve('./web'),
        publicPath: './web/',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
