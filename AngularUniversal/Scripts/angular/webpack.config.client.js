const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        client: path.resolve('client.ts'),
        vendors: path.resolve('vendors.ts')
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve('dist')
    },
    plugins: [
  
        new CopyWebpackPlugin([{
            from: 'global.js',
            to: ''
        }])
    ]
};