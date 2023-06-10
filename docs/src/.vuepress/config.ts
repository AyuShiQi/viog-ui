import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  // 站点配置
  lang: 'zh-CN',
  title: 'Viog UI',
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
          text: '基础组件',
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
            {
              text: '标签 tag',
              link: '/components/tag/'
            },
            {
              text: '布局 layout',
              link: '/components/layout/'
            },
            {
              text: '分割线 divider',
              link: '/components/divider/'             
            },
            {
              text: '滚动框 scroll',
              link: '/components/scroll/'
            },
            {
              text: '虚拟滚动 virtual-scroll',
              link: '/components/virtualScroll/'
            },
          ]
        },
        {
          text: '表单组件',
          children: [
            {
              text: '表单 form',
              link: '/components/form/'
            },
            {
              text: '开关 switch',
              link: '/components/switch/'             
            },
            {
              text: '上传 upload',
              link: '/components/upload/'
            },
            {
              text: '输入框 input',
              link: '/components/input/'
            },
            {
              text: '单选框 radio',
              link: '/components/radio/'
            },
            {
              text: '多选框 checkbox',
              link: '/components/checkbox/'
            },
            {
              text: '下拉框 select',
              link: '/components/select/'
            },
            {
              text: '虚拟下拉框 select-v',
              link: '/components/select-v/'
            },
            {
              text: '时间选择器 time-select',
              link: '/components/time-select/'
            },
            {
              text: '日期时间选择器 date-select',
              link: '/components/date-select/'
            }
          ]
        },
        {
          text: '导航组件',
          children: [
            {
              text: '导航 nav',
              link: '/components/nav/'
            },
            {
              text: '固钉 affix',
              link: '/components/affix/'  
            },
            {
              text: '菜单 menu',
              link: '/components/menu/'             
            },
            {
              text: '面包屑 breadcrumb',
              link: '/components/breadcrumb/'
            }
          ]
        },
        {
          text: '数据展示组件',
          children: [
            {
              text: '页头 header',
              link: '/components/header/'
            },
            {
              text: '卡片 card',
              link: '/components/card/'
            },
            {
              text: '头像框 avater',
              link: '/components/avater/'
            },
            {
              text: '伸缩框 collapse',
              link: '/components/collapse/'             
            },
            {
              text: '骨架框 skeleton',
              link: '/components/skeleton/'
            }
          ]
        },
        {
          text: '交互组件',
          children: [
            {
              text: '抽屉 drawer',
              link: '/components/drawer/'
            },
            {
              text: '气泡 bubble',
              link: '/components/bubble/'             
            },
            {
              text: '对话框 dialog',
              link: '/components/dialog/'
            },
            {
              text: '下拉框 dropdown',
              link: '/components/dropdown/'
            },
            {
              text: '消息 message',
              link: '/components/message/'
            },
            {
              text: '吐司 toast',
              link: '/components/toast/'
            }
          ]
        },
        {
          text: '数据交互组件',
          children: [
            {
              text: '可编辑表格 table-editor',
              link: '/components/table-editor/'
            }
          ]
        },
        {
          text: '加载组件',
          children: [
            {
              text: '加载 loading',
              link: '/components/loading/'
            }
          ]
        }
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