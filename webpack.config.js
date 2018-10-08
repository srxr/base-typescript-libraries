// var webpack = require('webpack');
var path = require('path');

var config = {
  defaultPath: '/dist',
  path: {
    src: '/src',
    dist: '/dist'
  }
};

module.exports = {
  devtool: 'source-map',
  mode: process.env.NODE_ENV || 'development', // none, development, production

  entry: {
    Sdk: [__dirname + config.path.src + '/index.ts']
  },

  output: {
    publicPath: config.defaultPath,
    path: path.join(__dirname, config.path.dist),
    filename: '[name].js',
    libraryTarget: 'umd',
    // 跨域加载模块
    crossOriginLoading: 'anonymous',
    // `library` 声明全局变量
    library: '[name]'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'dist')
        ]
      }
    ]
  },

  // uglify your script
  plugins: [
  ]
};
