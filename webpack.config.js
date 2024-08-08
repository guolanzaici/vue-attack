const path = require('path') // 引用path模块

module.exports = {  // 这里是commrnt.js语法
    // 入口文件
    entry:"./src/index.js",
    // 打包后的出口文件
    output:{
        // 输出的路径  是绝对路径(导入path模块) 这里是用node来做的
        path:path.resolve(__dirname,'build'),
        // 输出的文件名称
        filename:'build.js',
    },
    // loader的配置
    module:{
        rules:[
            // 详细loader配置

            // 打包css的配置
            {
                // 使用正则表达式,匹配那些文件
                test: /\.css$/,
                use:[
                    // use数组中loader执行顺序, 从右到左, 从下到上, 依次执行
                    // 创建style标签, 将js中的样式资源插入进行, 添加到head中生效
                    'style-loader',
                    // 将css文件变成commitjs模块加载js中, 里面的内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    // 使用开发模式打包
    mode:"development"
}
