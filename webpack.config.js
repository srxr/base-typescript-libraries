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
  // devtool: 'source-map',

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
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: [
          /(node_modules|dist)/
        ],
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  // uglify your scriptz
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
};
