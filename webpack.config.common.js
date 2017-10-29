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
        bin: path.resolve(__dirname, outputDirName + '/bin')
    },

    prepack = function() {

        console.log("removing \"" + folders.dist + "\"");
        rmdir.sync(folders.dist);

        console.log("copying \"" + folders.src + "\" to \"" + folders.build + "\"");
        copy.sync(folders.src, folders.build);

        console.log("create \"" + folders.bin + "\\lib");
        mkdir.sync(folders.bin + "/lib");
    },

    getEntry = function(entry) {

        if (entry)
            return entry;

        return folders.build + '/index.tsx';
    },

    getOutput = function() {
        return {
            filename: package.main || 'index.js',
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
            },
            // {
            //   test: /\.s?css$/,
            //   use: [
            //     "to-string-loader",
            //     "style-loader",
            //     "css-loader",
            //     "sass-loader"
            //   ]
            // }
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
            extensions: [".ts", ".js", ".css", ".scss", ".html"],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            descriptionFiles: ["package.json"]
        };
    },

    getPlugins = function(settings) {

        var plugins = [
            new DTSBundlePlugin({
                targetDirPath: folders.build,
                dtsBundlePath: folders.bin + '/index.d.ts'
            })
        ];

        if (!(settings && settings.copyPackageJson === false)) {
            plugins.push(
                new CopyPlugin({
                    from: "./package.json",
                    to: folders.bin + '/package.json'
                }));
        }

        if (settings && settings.plugins)
            for (var i = 0; i < settings.plugins.length; i++)
                plugins.push(settings.plugins[i]);

        return plugins;
    };

prepack();

module.exports = {
    package: package,
    folders: folders,
    getEntry: getEntry,
    getOutput: getOutput,
    getModule: getModule,
    getResolve: getResolve,
    getPlugins: getPlugins
};