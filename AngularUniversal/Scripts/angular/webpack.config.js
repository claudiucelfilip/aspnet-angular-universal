const path = require('path')
let clientConfig = require('./webpack.config.client');
let serverConfig = require('./webpack.config.server');
const webpackMerge = require('webpack-merge');
const getAotPlugin = require('./webpack.aot');

module.exports = function (options, webpackOptions) {
    console.log(options);
    let commonConfig = {
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [path.resolve('app'), path.resolve('node_modules')]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loaders: [
                        'ts-loader',
                        'angular2-template-loader'
                        
                    ]
                },
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'raw-loader'
                }
            ]
        }
    };
    
    if (options.client) {
        if (options.aot) {
            clientConfig = webpackMerge(clientConfig, {
                plugins: [
                    getAotPlugin('client', !!options.aot)
                ]
            });
        }
        return webpackMerge(commonConfig, clientConfig);
    }
    if (options.server) {
        if (options.aot) {
            serverConfig = webpackMerge(serverConfig, {
                plugins: [
                    getAotPlugin('server', !!options.aot)
                ]
            });
        }
        return webpackMerge(commonConfig, serverConfig);
    }
}