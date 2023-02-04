const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // pages: {
  //   index: {
  //     entry: 'packages/index.ts'
  //   }
  // },
  chainWebpack: config => {
    config.module.rule('ts')
    .include.add(path.resolve(__dirname, 'packages')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      // 暂时没哟
      return options
    })
  }
})
