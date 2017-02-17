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
![npm 脚本运行webpack]('https://github.com//freeshineit/webpack-demo/blob/master/readme-images/2FEFCDDE-88E7-46D3-9B7D-E273620FAD67.png?raw=true')