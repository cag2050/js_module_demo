* node版本v7.9.0，支持了大部分es6的功能，但还不支持es6模块化(export、import)。

* 检测ES6
可以使用es-checker来检测当前Node.js对ES6的支持情况。
使用命令，全局安装es-checker：
```
npm install -g es-checker
```
安装好之后，执行以下命令来查看Node.js对ES6的支持情况。
```
es-checker
```
可以从输出中查看当前版本(v7.9.0)的Node.js对ES6的支持情况。
可以看到还不支持es的模块化。
```
Module
  × Module export command
  × Module import command
=========================================
Passes 38 feature Detections
Your runtime supports 90% of ECMAScript 6
=========================================
```

* 让node支持es模块化(export、import)的方法：
1. babel-node方式（使用babel-node命令，或webstorm配置Node interpreter直接run)
1）使用babel-node命令
全局安装babel-cli，项目安装babel-preset-es2015，新建.babelrc文件，内容如下：
```
{
    "presets": [
        "es2015"
    ],
    "plugins": []
}
```
然后，使用babel-node命令运行带es模块化代码的js文件：
说明：babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境。它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码。
它不用单独安装，而是随babel-cli一起安装。
```
babel-node import.js
```
2）webstorm配置Node interpreter直接run
打开webstorm，Preferences - Languages & Frameworks - Node.js and NPM - Node interpreter - Add... - Add Local - 选择项目里安装的node_modules/babel-cli/bin/babel-node.js - OK，现在直接run相应的js文件即可。
2. 从版本8.5.0开始，通过一个命令行选项：experimental-modules，Node.js就能支持原生的ES模块。
需要将 Node 源码文件后缀名改成.mjs。
```
node --experimental-modules main.mjs
```
官方文档：https://nodejs.org/api/esm.html
