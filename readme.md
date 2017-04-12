##npm 脚本运行webpack

在package.json中的`script`中添加`'webpack':'webpack --config webpack.config.js --progress --display-modules --color'`

具体代码：
```
    {
      "name": "webpack-demo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "webpack":"webpack --config webpack.config.js --progress --display-modules --colors"
      },
      "author": "shineshao",
      "license": "ISC",
      "devDependencies": {
        "webpack": "^2.2.1"
      }
    }
```
    
在控制台中运行`npm run webpack`

结果：
![npm 脚本运行webpack](https://github.com//freeshineit/webpack-demo/blob/master/readme-images/2FEFCDDE-88E7-46D3-9B7D-E273620FAD67.png?raw=true)


#####webpack-config.js配置

  //第一种  entry 字符串
```
   module.exports = {
       entry:'./src/script/main.js',
       output:{
           path:'./dist/js/',
           filename:'bundle.js'
       }
   }
```
  //第二种 entry 数组
```
  module.exports = {
       entry:['./src/script/main.js','./src/script/gg.js'],
       output:{
           path:'./dist/js/',
           filename:'[hash].js',
       }
   }
```
  //第三种 entry 对象
```  
  module.exports = {
      entry:{
          main:'./src/script/main.js',
          gg:'./src/script/gg.js'
      },
      output:{
          path:'./dist/js/',
          filename:'[name]_[hash].js',
      }
  }
```

######webpack插件引入

```
  let htmlWebpackPlugin = require('html-webpack-plugin');

  //第三种 entry 对象
  module.exports = {
      entry:{
          main:'./src/script/main.js',
          gg:'./src/script/gg.js'
      },
      output:{
          path:'./dist',
          filename:'js/[name].js',
      },
      plugins:[
          new htmlWebpackPlugin({
              template:'index.html'
          }),
      ]
  }
```
其中`template:'index.html'`是生成html文件的模版

具体 [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) 使用


