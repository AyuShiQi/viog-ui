import path from 'path'
import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  // 站点配置
  lang: 'zh-CN',
  title: 'viog-ui组件库',
  description: '基于vue3的炫酷组件库',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
    rel: 'icon',
    href: '/img/logo.png'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  plugins: [
    registerComponentsPlugin({
      // 配置项
    }),
    copyCodePlugin({
    })
  ],
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: '快速开始',
        link: '/start/',
      },
      // NavbarGroup
      {
        text: '组件',
        link: '/components/'
      },
      {
        text: '更新日志',
        link: '/update/UPDATE.md'
      }
    ],
    sidebar: {
      '/components/': [
        {
          text: '风格说明',
          children: [
            {
              text: '颜色',
              link: '/components/feature/color.md'
            },
            {
              text: '字体',
              link: '/components/feature/font-size.md'
            },
            {
              text: '其他样式风格',
              link: '/components/feature/css-var.md'
            },
          ]
        },
        {
          text: '组件',
          children: [
            {
              text: '按钮 button',
              link: '/components/button/'
            },
            {
              text: '图标 icon',
              link: '/components/icon/'
            },
            {
              text: '链接 link',
              link: '/components/link/'
            },
          ]
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
    repo: 'https://github.com/AyuShiQi/viog-ui',
    docsRepo: 'https://github.com/AyuShiQi/viog-ui/tree/main/docs',
    logo: '/img/logo.png'
  }),
})