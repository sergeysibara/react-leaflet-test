let path = require('path');
let webpack = require('webpack');

function resolve(targetPath) {
    return path.resolve(__dirname, targetPath)
}


let bundlesPathName = 'dist';

let configPaths = {
    src: resolve('src'),
    dist: resolve(bundlesPathName),
    babelPolyfill: resolve('./node_modules/babel-polyfill/dist/polyfill.js'),
    react: resolve('./node_modules/react/dist/react.js'),
    reactDom: resolve('./node_modules/react-dom/dist/react-dom.js'),
    leaflet: resolve('./node_modules/leaflet/dist/leaflet.js'),
    reactLeaflet: resolve('./node_modules/react-leaflet/dist/react-leaflet.js'),
};

module.exports = {
    devtool: 'source-map',
    context: configPaths.src,
    entry: {
        index: './index.js',
        vendor: [
            configPaths.babelPolyfill,
            configPaths.react,
            configPaths.reactDom,
            configPaths.leaflet,
            configPaths.reactLeaflet
        ]
    },

    output: {
        path: configPaths.dist,
        filename: '[name].bundle.js',
        chunkFilename: "[id].bundle.js"
    },

    resolve: {
        root: configPaths.src,
        alias: {
            react: configPaths.react,
            'react-dom': configPaths.reactDom,
            leaflet: configPaths.leaflet,
            'react-leaflet':configPaths.reactLeaflet
        },
        extensions: ['', '.js']
    },


    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    noParse: [
        configPaths.babelPolyfill,
        configPaths.react,
        configPaths.reactDom,
        configPaths.leaflet,
        configPaths.reactLeaflet,
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    ]
};