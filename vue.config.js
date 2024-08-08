// vue.config.js
const {resolve} = require("node:path");
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.limit = 10240; // 限制图片大小，小于此值的图片会被转为base64
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