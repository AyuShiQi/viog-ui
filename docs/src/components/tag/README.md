---
sidebarDepth: 1
---

# 标签 tag <Badge type="warning" text="待新增优化" vertical="middle"/>

简单的注释标签

## 使用说明

### 简单引入

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

### 颜色

通过修改color属性定义不同的tag颜色

<code-show>
<row>
<vi-tag>我是标签</vi-tag>
<vi-tag color="purple">我是标签</vi-tag>
<vi-tag color="pink">我是标签</vi-tag>
<vi-tag color="red">我是标签</vi-tag>
<vi-tag color="yellow">我是标签</vi-tag>
<vi-tag color="green">我是标签</vi-tag>
<vi-tag color="blue">我是标签</vi-tag>
</row>
<template v-slot:code>

``` vue
<vi-tag>我是标签</vi-tag>
<vi-tag color="purple">我是标签</vi-tag>
<vi-tag color="pink">我是标签</vi-tag>
<vi-tag color="red">我是标签</vi-tag>
<vi-tag color="yellow">我是标签</vi-tag>
<vi-tag color="green">我是标签</vi-tag>
<vi-tag color="blue">我是标签</vi-tag>
```

</template>
</code-show>

与button类似，使用mutate属性让tag样式变异

<code-show>
<row>
<vi-tag mutate>我是标签</vi-tag>
<vi-tag mutate color="purple">我是标签</vi-tag>
<vi-tag mutate color="pink">我是标签</vi-tag>
<vi-tag mutate color="red">我是标签</vi-tag>
<vi-tag mutate color="yellow">我是标签</vi-tag>
<vi-tag mutate color="green">我是标签</vi-tag>
<vi-tag mutate color="blue">我是标签</vi-tag>
</row>
<template v-slot:code>

``` vue
<vi-tag mutate>我是标签</vi-tag>
<vi-tag mutate color="purple">我是标签</vi-tag>
<vi-tag mutate color="pink">我是标签</vi-tag>
<vi-tag mutate color="red">我是标签</vi-tag>
<vi-tag mutate color="yellow">我是标签</vi-tag>
<vi-tag mutate color="green">我是标签</vi-tag>
<vi-tag mutate color="blue">我是标签</vi-tag>
```

</template>
</code-show>

### 尺寸

有三种尺寸的tag使用，通过size属性定义

<code-show>
<row>
<vi-tag size="big">标签</vi-tag>
<vi-tag>标签</vi-tag>
<vi-tag size="small">标签</vi-tag>
</row>
<template v-slot:code>

``` vue
<vi-tag size="big">标签</vi-tag>
<vi-tag>标签</vi-tag>
<vi-tag size="small">标签</vi-tag>
```

</template>
</code-show>

使用max属性，使标签padding变大

<code-show>
<row>
<vi-tag max size="big">这是max标签</vi-tag>
<vi-tag max>这是max标签</vi-tag>
<vi-tag max size="small">这是max标签</vi-tag>
</row>
<template v-slot:code>

``` vue
<vi-tag max size="big">这是max标签</vi-tag>
<vi-tag max>这是max标签</vi-tag>
<vi-tag max size="small">这是max标签</vi-tag>
```

</template>
</code-show>

### 标签嵌套

标签可以嵌套使用

<code-show>
<row>
<vi-tag>
  今日访客
  <vi-tag color="red" size="small">99+</vi-tag>
</vi-tag>
<vi-tag size="small">
  待完成
  <vi-tag color="green" size="small">5</vi-tag>
</vi-tag>
</row>
<template v-slot:code>

``` vue
<vi-tag>
  今日访客
  <vi-tag color="red" size="small">99+</vi-tag>
</vi-tag>
<vi-tag size="small">
  待完成
  <vi-tag color="green" size="small">5</vi-tag>
</vi-tag>
```

</template>
</code-show>

## Props
| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| color | 标签颜色 | 'default' \| 'red' \| 'green' \| 'yellow' \| 'pink' \| 'blue' \| 'purple' | 'default'
| size | 标签大小 | 'big' \| 'middle' \| 'small' | 'middle' |
| max | 标签padding扩大 | boolean | false |
| mutate | 样式变异 | boolean | false |

## 插槽
| 插槽名 | 描述 |
| - | - |
| 默认插槽 | 标签内容 |