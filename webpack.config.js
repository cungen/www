'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = process.env.NODE_ENV || 'development';
var PORT = '8081';

var DEV = env === 'development';
var entryPath = path.join(__dirname, 'src');
var outPath = path.join(__dirname, 'dist');


var config = {};

/// devtool config
if (DEV) {
    config.devtool = 'eval';
} else {
    config.devtool = 'cheap-source-map';
}

/// entry
config.entry = {
    app: path.join(entryPath, 'index.js')
};

/// output
config.output = {
    path: outPath,
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].js'
};

/// initialize plugins
config.plugins = [
    new HtmlWebpackPlugin({
        template: path.join(entryPath, 'index.html'),
        hash: false,
        favicon: path.join(entryPath, 'static/favicon.ico'),
        filename: 'index.html',
        inject: 'body',
        minify: {
            collapseWhitespace: true
        }
    }),
    new ExtractTextPlugin('[name].css', {
        disable: DEV
    })
];

/// initialize modules
config.module = {
    preLoaders: [],
    loaders: [{
        test: /\.json$/,
        loader: 'json'
    }, {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
        exclude: /(node_modules|bower_components)/
    }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?\w+)?$/,
        loader: 'file'
    }]
};



if (DEV) {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    );
} else {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    );
}

if (DEV) {
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    )
} else {
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        })
    )
}

config.devServer = {
    contentBase: '.',
    port: PORT,
    historyApiFallback: true,
    stats: {
        modules: false,
        cached: true,
        colors: true,
        chunk: false
    },
    proxy: {
        '/api/*': {
            target: 'http://dev0.m.com:22222',
            rewrite: function(req) {
                req.url = req.url.replace(/^\/api/, '');
            }
        }
    }
};

module.exports = config;
