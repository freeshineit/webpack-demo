let htmlWebpackPlugin = require('html-webpack-plugin');

//第一种  entry 字符串
// module.exports = {
//     entry:'./src/script/main.js',
//     output:{
//         path:'./dist/js/',
//         filename:'bundle.js'
//     }
// }

//第二种 entry 数组
// module.exports = {
//     entry:['./src/script/main.js','./src/script/gg.js'],
//     output:{
//         path:'./dist/js/',
//         filename:'[hash].js',
//     }
// }
// 
 

//第三种 entry 对象
module.exports = {
    entry:{
        main:'./src/script/main.js',
        gg:'./src/script/gg.js'
    },
    output:{
        path:'./dist/js/',
        filename:'[name].js',
        publicPath:'http://cdn.com'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'head',
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
    ]
}