const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'packages/index.ts'
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  parallel: false,
  css: {
    extract: false
  }
})
