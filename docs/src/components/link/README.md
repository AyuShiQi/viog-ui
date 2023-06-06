---
sidebarDepth: 1
---

# 链接 link

使用link组件，引入超链接


## 使用说明

### 简单引入

<code-show>
<row>
<vi-link href="https://github.com/AyuShiQi/viog-ui">去往github</vi-link>
</row>
<template v-slot:code>

``` vue
<vi-link href="https://github.com/AyuShiQi/viog-ui">去往github</vi-link>
```

</template>
</code-show>

### 颜色

通过修改color属性定义不同的link颜色

<code-show>
<row>
<vi-link>链接</vi-link>
<vi-link color="purple">链接</vi-link>
<vi-link color="red">链接</vi-link>
<vi-link color="pink">链接</vi-link>
<vi-link color="green">链接</vi-link>
<vi-link color="yellow">链接</vi-link>
<vi-link color="blue">链接</vi-link>
<vi-link color="dark">链接</vi-link>
</row>
<template v-slot:code>

``` vue
<vi-link>链接</vi-link>
<vi-link color="purple">链接</vi-link>
<vi-link color="red">链接</vi-link>
<vi-link color="pink">链接</vi-link>
<vi-link color="green">链接</vi-link>
<vi-link color="yellow">链接</vi-link>
<vi-link color="blue">链接</vi-link>
<vi-link color="dark">链接</vi-link>
```

</template>
</code-show>

### 尺寸

有三种尺寸的链接使用，通过size属性定义

<code-show>
<row>
<vi-link size="big">链接</vi-link>
<vi-link>链接</vi-link>
<vi-link size="small">链接</vi-link>
</row>
<template v-slot:code>

``` vue
<vi-link size="big">链接</vi-link>
<vi-link>链接</vi-link>
<vi-link size="small">链接</vi-link>
```

</template>
</code-show>

### 跳转地址

通过配置属性href定义跳转地址，你也可以配置属性target定义跳转方式

## Props
| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| color | 链接颜色 | 'default' \| 'dark' \| 'red' \| 'green' \| 'yellow' \| 'pink' \| 'blue' \| 'purple' | 'default'
| size | 链接大小 | 'big' \| 'middle' \| 'small' | 'middle' |
| href | 跳转地址 | string | - |
| radius | 按钮边框弧度 | '_blank' \| '_self' \| '_parent' \| '_top' \| '_framename' | '_self' |

## 插槽
| 插槽名 | 描述 |
| - | - |
| 默认插槽 | 链接描述内容 |