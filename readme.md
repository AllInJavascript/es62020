# ES6开发环境搭建

## 1 node|npm安装
### 安装时最新版本的node版本是 v12.13.1
#### 注意事项：
1. 如果把原来低版本的node卸载掉 再安装最新node；此时npm版本是旧的，此时“npm update npm -g” 升级npm会报错；需要把npm删除掉，重新安装node，然后再 “npm update npm -g” 升级npm 
2. 最新node需要安装编译环境 3个G的依赖
3. 如果node版本还是有问题，可以考虑安装多个版本的node【百度】

## 2 npm init 初始化项目目录

## 3 安装webpack4
- ### npm i webpack webpack-cli -D --registry=https://registry.npm.taobao.org
- ### 配置webpack
    根目录创建webpack配置文件 webapck.dev.config.js
- ### 配置package.json，添加启动webpack的脚本
    "dev": "webpack --config ./webpack.dev.config.js --mode development"
- #### 注意事项：
1. npm安装较慢，加上淘宝镜像参数 --registry=https://registry.npm.taobao.org
2. npm 安装时的命名 参数简写s
    - npm install ==> npm i
    - -global ==> -g
    - --save ==> -S 安装的包将写入package.json里面的dependencies，dependencies：生产环境需要依赖的库
    - --save-dev=-D，安装的包将写入packege.json里面的devDependencies，devdependencies：只有开发环境下需要依赖的库
3. webapck 4.0+ 需要安装webpack-cli
4. webpack报错总结：
    1. npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.10 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.10: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
    - fsevents不在package.json里，但是仍然安装了，是因为你的系统是Windows系统，fsevents是苹果系统的可选依赖,你的项目有可能是团队项目，别人在他的mac上安装了fsevents相关依赖库，所以到这边你也就安装到你的windows上边了。你可以检查你的package.json 文件中是不是有fsevents相关依赖，删除即好！ 
    如果没有，删除node_modules文件夹，重新安装各项依赖就好了

    - event是mac osx系统的，在win或者Linux下使用了 所以会有警告，忽略即可。

    2. npm WARN es62020@1.0.0 No repository field.
    - package.json里缺少repository字段，也就是说缺少项目的仓库字段

## 4 安装webpack-dev
- ### npm i webpack-dev-server html-webpack-plugin -D --registry=https://registry.npm.taobao.org

- ### 修改webapck.dev.config.js
    引入path、HtmlWebpackPlugin模块，添加plugins、devserver配置
- ### 配置package.json，添加启动webpack-dev-server的脚本
    "devServer": "webpack-dev-server --config ./webpack.dev.config.js --mode development" 

## 5 安装bable7 
- ### npm i @babel/core @babel/plugin-transform-runtime @babel/preset-env babel-loader -D --registry=https://registry.npm.taobao.org
- ### npm i  @babel/runtime -S --registry=https://registry.npm.taobao.org
    ***注意 @babel/runtime 需要安装到开发依赖***
- ### 创建bable配置文件 .babelrc
- ### 修改webapck.dev.config.js 
    #### 添加module配置
- #### babel解析报错

    -  babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
    - 原因是：babel-loader和babel-core版本不对应所产生的，babel-loader 8.x对应babel-core 7.xbabel-loader 7.x对应babel-core 6.x

    - 以下是bable-loader7时的安装依赖【此时是babel-laoder8】
    npm i babel-core babel-loader babel-polyfill babel-preset-env babel-preset-es2015 -D --registry=https://registry.npm.taobao.org
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.6",
    "babel-polyfill": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",

## 6 扩展、深入
1. @babel/runtime 和 @babel/plugin-transform-runtime的作用和区别 【ok】
2. babel7其他依赖的作用 【ok】
3. 项目中使用eslint 【ok】
4. 项目传到git上去 【ok】
（详细见有道云笔记）

