const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    devServer: {
        port: process.env.PORT || 3000,
        watchContentBase: true,
        historyApiFallback: true,
        contentBase: './dist',
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
        splitChunks: {
            cacheGroups: {
                // custom cache group to force all components files
                // in /components/common into their own chunk
                common: {
                    name: "other-components",
                    test: /[\\/]components[\\/]/,
                    enforce: true
                },
                pages: {
                    name: "pages",
                    test: /[\\/]pages[\\/]/,
                    enforce: true
                },
                chakra_ui: {
                    name: "chakra-ui",
                    test: /[\\/]chakra-ui[\\.js]/,
                    enforce: true
                },
                apollo_client: {
                    name: "apollo-client",
                    test: /[\\/]App[\\.js]/,
                    enforce: true
                },
                graphql: {
                    name: "graphql",
                    test: /[\\/]graphql[\\/]/,
                    enforce: true
                },
                // default defined by webpack
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                vendors_chakra: {
                    test: /[\\/]node_modules[\\/]@chakra-ui[\\/]/,
                    priority: -10
                },
                maps_world: {
                    name: "map-world-components",
                    test: /[\\/]maps[\\/]world[\\.jsx]/,
                    enforce: true
                },
                maps_usa: {
                    name: "map-usa-components",
                    test: /[\\/]maps[\\/]usa[\\.jsx]/,
                    enforce: true
                },
                maps_vn: {
                    name: "map-vn-components",
                    test: /[\\/]maps[\\/]vietnam[\\.jsx]/,
                    enforce: true
                }
            }
        }
    }
    //...
};