---
sidebarDepth: 1

next:
  text: 表单 form
  link: /components/form
---

# 虚拟滚动框 virtual-scroll <Badge type="warning" text="待优化" vertical="middle"/>

适用于展示大数据的滚动框

::: warning
由于内部实现方法特性，请一定通过css属性给定滚动框一个固定的px单位高度
:::

## 使用说明

### 简单引入

虚拟滚动适用于展示元素过多导致加载过慢或界面卡顿的情况

该虚拟滚动目前仅支持等高子节点的展示，通过datas传入数据数组，展示模板通过默认插槽传入

<code-show>
<row>
<vi-tag>我是标签</vi-tag>
</row>
<template v-slot:code>

``` vue
<vi-tag>我是标签</vi-tag>
```

</template>
</code-show>

## Props
| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| datas | 数据数组 | object | null |
| color | 滚动条颜色 | 'grey' \| 'black' \| 'white' \| 'golden' \| 'purple' | 'grey' |
| hidden | 是否隐藏滚动条,隐藏后保持滚动效果 | boolean | false |

