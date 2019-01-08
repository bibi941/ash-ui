const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        includePaths: [path.join(__dirname), 'styles']
      }
    }
  }
}
