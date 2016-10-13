const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    devtool: 'source-map',

    // Seperates the application into chunks
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'theme': './src/theme.ts',
        'app': './src/main.ts',
    },
    output: {
        path: path.resolve('dist'), //Serves it out of distribution folder
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    // Determines the naming convention
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    tslint: {
      emitErrors: true,
      failOnHint: true,
      resourcePath: 'src'
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ],
        loaders: [
            // Finds all typescripts files and loads up the angular files
            {
                test: /\.ts$/,
                exclude: [/\.(spec|e2e)\.ts$/],
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                exclude: path.resolve('src', 'app'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
            },
            {
                test: /\.css$/,
                include: path.resolve('src', 'app'),
                loader: 'raw'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(jpg|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: [
        // Seperates the application into chunks. It seems like name array order matters.
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'theme', 'polyfills']
        }),
        // Pulls the css into seperate bundles
        new ExtractTextPlugin('[name].css'),
        // Injects the bundles into the index.html
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin(),

        /**
         * Plugin: UglifyJsPlugin
         * Description: Minimize all JavaScript output of chunks.
         * Loaders are switched into minimizing mode.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
         */
        // NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
        new UglifyJsPlugin({
            // beautify: true, //debug
            // mangle: false, //debug
            // dead_code: false, //debug
            // unused: false, //debug
            // deadCode: false, //debug
            // compress: {
            //   screw_ie8: true,
            //   keep_fnames: true,
            //   drop_debugger: false,
            //   dead_code: false,
            //   unused: false
            // }, // debug
            // comments: true, //debug


            beautify: false, //prod
            mangle: { screw_ie8 : true, keep_fnames: true }, //prod
            compress: { screw_ie8: true }, //prod
            comments: false //prod
        })
    ]
};
