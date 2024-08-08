const {resolve} = require("node:path");
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.limit = 10240;
                return options;
            });
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        }
    }
}