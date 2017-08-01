const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve('server.ts'),
    output: {
        filename: 'server.js',
        path: path.resolve('dist'),
        libraryTarget: 'commonjs2'
    },
    devtool: 'source-map',
    target: 'node',
    node: {
        fs: 'empty'
    }
};