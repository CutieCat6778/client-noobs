const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    devServer: {
        port: process.env.PORT || 3000,
        watchContentBase: true,
        historyApiFallback: true,
        contentBase: './dist'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ? "error" : false,
        maxEntrypointSize: 200 * 1024,
        maxAssetSize: 100 * 1024,
    }
};