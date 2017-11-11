const path = require('path');
const package = require('./package.json');
const rmdir = require('xfs/rmdir.js');
const mkdir = require('xfs/mkdir.js');
const copy = require('xfs/copy.js');
const DTSBundlePlugin = require('xwebpack/DTSBundlePlugin.js');
const CopyPlugin = require('xwebpack/CopyPlugin.js');

var

    outputDirName = 'dist',

    folders = {
        root: __dirname,
        src: path.resolve(__dirname, 'src'),
        dist: path.resolve(__dirname, outputDirName),
        build: path.resolve(__dirname, outputDirName + '/build'),
        bin: path.resolve(__dirname, outputDirName + '/bin'),
        js: path.resolve(__dirname, outputDirName + '/bin/lib'),
        css: path.resolve(__dirname, outputDirName + '/bin/assets/css'),
    },

    createDir = function(dirPath) {
        console.log("create \"" + dirPath);
        mkdir.sync(dirPath);
    },

    prepack = function() {

        console.log("removing \"" + folders.dist + "\"");
        rmdir.sync(folders.dist);

        console.log("copying \"" + folders.src + "\" to \"" + folders.build + "\"");
        copy.sync(folders.src, folders.build);

        createDir(folders.js);
        createDir(folders.css);
    },

    getEntry = function(entry) {
        return folders.build + '/main.ts';
    },

    getOutput = function() {
        return {
            filename: 'app.js',
            path: folders.bin,
            library: package.name || 'unknown',
            libraryTarget: "umd"
        };
    },

    getModule = function(settings) {

        var rules = [{
                test: /\.tsx?$/,
                use: [
                    'awesome-typescript-loader?configFileName=' + settings.tsconfig
                ]
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "source-map-loader"
            }
        ];

        if (settings && settings.rules)
            for (var i = 0; i < settings.rules.length; i++)
                rules.push(settings.rules[i]);

        return {
            rules: rules
        };
    },

    getResolve = function() {
        return {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".less", ".html"],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            descriptionFiles: ["package.json"]
        };
    };

prepack();

module.exports = {
    package: package,
    folders: folders,
    getEntry: getEntry,
    getOutput: getOutput,
    getModule: getModule,
    getResolve: getResolve
};