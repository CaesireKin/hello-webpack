# HELLO WEBPACK

## 资料参考
+ Lesson 1 （[参考](https://webpack.js.org/guides/getting-started)）
+ Lesson 2 （[参考](https://webpack.js.org/guides/asset-management)）

## 笔记
1. 执行：npm init 初始化目录（主要是添加一份package.json）
2. 执行 npm install webpack webpack-cli --save-dev，将webpack作为开发环境的依赖引入项目
3. package.json::scripts中可以自定义脚本命令，如：
```
    scripts: {
        "build": "some directive"
    }
```
随后，可以在命令行中，执行 npm run **build**，效果等同于执行 `npx webpack`
4. 基本loader：
    1. style-loader
    2. css-loader
    3. file-loader
5. style-loader 以及 css-loader 的基本配置 \
安装上述 loader ，执行命令 `npm install --save-dev style-loader css-loader`
```
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    }
```
6. file-loader 的基本配置 \
安装 file-loader ，执行命令 `npm install --save-dev file-loader`
```
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
    }
```
7. file-loader 载入字体 \
安装 file-loader 参考 6.
```
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
    }
```
8. 载入数据，先列出目前搜集到的loader \
安装 csv-loader xml-loader 执行命令 `npm install --save-dev csv-loader xml-loader`
    1. csv-loader xml-loader
```
    {
        test: /\.(csv | tsv)$/,
        use: ['csv-loader']
    },
    {
        test: /\.xml$/,
        use: ['xml-loader]
    }
```