module.exports = {
    entry: './src/App.js',
    output: {
        path: "./assets/js",
        publicPath: "/assets/js/",
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
