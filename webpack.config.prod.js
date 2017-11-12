const common = require('./webpack.config.common.js');
const CopyPlugin = require('xwebpack/CopyPlugin.js');
const DeletePlugin = require('xwebpack/DeletePlugin.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var

    tsconfig = 'tsconfig.prod.json',

    plugins = [
        new CopyPlugin({
            from: common.folders.root + '/node_modules/bootstrap/dist/css/bootstrap.min.css',
            to: common.folders.css + '/bootstrap.min.css'
        }),
        new CopyPlugin({
            from: common.folders.root + '/node_modules/jquery/dist/jquery.min.js',
            to: common.folders.js + '/jquery.min.js'
        }),
        new CopyPlugin({
            from: common.folders.root + '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            to: common.folders.js + '/bootstrap.bundle.min.js'
        }),
        new CopyPlugin({
          from: common.folders.bin + '/app.js',
          to: common.folders.js + '/app.js',
          move: true
        }),
        new CopyPlugin({
          from: common.folders.bin + '/app.js.map',
          to: common.folders.js + '/app.js.map',
          move: true
        }),
        new CopyPlugin({
            from: common.folders.build + '/index.html',
            to: common.folders.bin + '/index.html'
        }),
        new ExtractTextPlugin({
          filename: './assets/css/app.css',
          allChunks: true
        })
    ],

    rules = [
        {
          test: /\.tsx?$/,
          loader: 'tslint-loader',
          options: {
            configFileName: tsconfig
          }
        },
        // {
        //   test: /\.html$/,
        //   use: 'html-loader'
        // },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'to-string-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader?name=./assets/images/[hash].[ext]',
            'image-webpack-loader?{ gifsicle: {optimizationLevel: 7, interlaced: false}, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
          ]
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader?limit=10000&mimetype=application/font-woff&name=./assets/fonts/[name].[ext]'
        },
        {
          test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader?name=./assets/fonts/[name].[ext]'
        }
    ];

module.exports = {
    entry: common.getEntry(),
    output: common.getOutput(),
    module: common.getModule({ tsconfig: tsconfig, rules: rules }),
    resolve: common.getResolve(),
    plugins: plugins,
    externals: [],
    devtool: 'source-map',
    bail: true,
    cache: false
};