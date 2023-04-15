const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  parallel: false,
  css: {
    // extract: false
  }
})
