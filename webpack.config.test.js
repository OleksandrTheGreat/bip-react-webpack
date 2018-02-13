const common = require('./webpack.config.common.js');

module.exports = {
    entry: common.folders.src + '/index.test.tsx',
    output: common.getOutput(),
    module: common.getModule({
        tsconfig: "tsconfig.test.json",
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['ignore-loader']
            }
        ]
    }),
    resolve: common.getResolve(),
    devtool: "cheap-module-eval-source-map",
    bail: false,
    cache: false
};