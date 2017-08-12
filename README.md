# Base TypeScript SDK

该项目主要用于构建 SDK，采用 `UMD` 风格定义模块，支持快速构建打包模块化 JavaScript 组件/库。

## 环境
 - Nodejs 
 - TypeScript

## 初始化
```
git clone https://github.com/leamtrop/base-typescript-libraries.git
npm i typescript -g
npm i
```

## 目录说明
`dist` 打包之后的文件  
`docs` 模块说明文件  
`examples` 调用 SDK 示例代码，在浏览器中打开  
`src` 模块源代码  
`test` 模块测试文件  

## 基本用法
``模块：一个文件就是一个模块``

模块开发完成，在 `src/lib/base.js` 中暴露模块，重新打包，`console.log(window.Sdk)` 可看到暴露的 API。

调用示例：
```javascript
Sdk.browser.name;
```

## 打包说明
在开发完成模块之后，使用以下命令打包：
```
npm run dev  # 打包开发环境代码
npm run watch  # 监控文件变化，自动打包
npm run production  # 打包生产环境代码
npm run build:all  # 使用 tsc 单独打包所有模块
# 等价于以下命令：
webpack  # 打包开发环境代码
webpack -w  # 监控文件变化，自动打包
webpack -p  # 打包生产环境代码
tsc  # 使用 tsc 单独打包所有模块
```

## 相关链接
 - [https://nodejs.org/](https://nodejs.org/)
 - [https://webpack.js.org/](https://webpack.js.org/)
 - [https://github.com/umdjs/umd](https://github.com/umdjs/umd)
 - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
