---
sidebarDepth: 1
---

# 按钮 button

按钮是项目中最常用的组件之一

## 使用说明

### 简单引入
使用此方法引入最基础的按钮样式

<code-show>
<row>
<vi-button>按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button>按钮</vi-button>
```

</template>
</code-show>

### 颜色

共有八种颜色的按钮，使用属性color进行调控

<code-show>
<row>
<vi-button>按钮</vi-button>
<vi-button color="purple">按钮</vi-button>
<vi-button color="red">按钮</vi-button>
<vi-button color="pink">按钮</vi-button>
<vi-button color="yellow">按钮</vi-button>
<vi-button color="blue">按钮</vi-button>
<vi-button color="green">按钮</vi-button>
<vi-button color="dark">按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button>按钮</vi-button>
<vi-button color="purple">按钮</vi-button>
<vi-button color="red">按钮</vi-button>
<vi-button color="pink">按钮</vi-button>
<vi-button color="yellow">按钮</vi-button>
<vi-button color="blue">按钮</vi-button>
<vi-button color="green">按钮</vi-button>
<vi-button color="dark">按钮</vi-button>
```

</template>
</code-show>

可以通过添加mutate属性，将按钮颜色变异，使按钮更加炫酷

<code-show>
<row>
<vi-button>按钮</vi-button>
<vi-button mutate color="purple">按钮</vi-button>
<vi-button mutate color="red">按钮</vi-button>
<vi-button mutate color="pink">按钮</vi-button>
<vi-button mutate color="yellow">按钮</vi-button>
<vi-button mutate color="blue">按钮</vi-button>
<vi-button mutate color="green">按钮</vi-button>
<vi-button color="dark">按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button>按钮</vi-button>
<vi-button mutate color="purple">按钮</vi-button>
<vi-button mutate color="red">按钮</vi-button>
<vi-button mutate color="pink">按钮</vi-button>
<vi-button mutate color="yellow">按钮</vi-button>
<vi-button mutate color="blue">按钮</vi-button>
<vi-button mutate color="green">按钮</vi-button>
<vi-button color="dark">按钮</vi-button>
```

</template>
</code-show>

需要注意的是，default/dark颜色按钮，mutate属性对其无效

### 样式

通过修改type属性、配合mutate属性，可以定义不同的按钮样式

<!-- 样式组1 -->
<code-show>
<row>
<vi-button type="plain">按钮</vi-button>
<vi-button type="plain" color="purple">按钮</vi-button>
<vi-button type="plain" color="red">按钮</vi-button>
<vi-button type="plain" color="pink">按钮</vi-button>
<vi-button type="plain" color="yellow">按钮</vi-button>
<vi-button type="plain" color="blue">按钮</vi-button>
<vi-button type="plain" color="green">按钮</vi-button>
<vi-button type="plain" color="dark">按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button type="plain">按钮</vi-button>
<vi-button type="plain" color="purple">按钮</vi-button>
<vi-button type="plain" color="red">按钮</vi-button>
<vi-button type="plain" color="pink">按钮</vi-button>
<vi-button type="plain" color="yellow">按钮</vi-button>
<vi-button type="plain" color="blue">按钮</vi-button>
<vi-button type="plain" color="green">按钮</vi-button>
<vi-button type="plain" color="dark">按钮</vi-button>
```

</template>
</code-show>

<!-- 样式组2 -->
<code-show>
<row>
<vi-button mutate type="plain">按钮</vi-button>
<vi-button mutate type="plain" color="purple">按钮</vi-button>
<vi-button mutate type="plain" color="red">按钮</vi-button>
<vi-button mutate type="plain" color="pink">按钮</vi-button>
<vi-button mutate type="plain" color="yellow">按钮</vi-button>
<vi-button mutate type="plain" color="blue">按钮</vi-button>
<vi-button mutate type="plain" color="green">按钮</vi-button>
<vi-button mutate type="plain" color="dark">按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button mutate type="plain">按钮</vi-button>
<vi-button mutate type="plain" color="purple">按钮</vi-button>
<vi-button mutate type="plain" color="red">按钮</vi-button>
<vi-button mutate type="plain" color="pink">按钮</vi-button>
<vi-button mutate type="plain" color="yellow">按钮</vi-button>
<vi-button mutate type="plain" color="blue">按钮</vi-button>
<vi-button mutate type="plain" color="green">按钮</vi-button>
<vi-button mutate type="plain" color="dark">按钮</vi-button>
```

</template>
</code-show>

<!-- 样式组3 -->
<code-show>
<row>
<vi-button type="transparent">按钮</vi-button>
<vi-button type="transparent" color="purple">按钮</vi-button>
<vi-button type="transparent" color="red">按钮</vi-button>
<vi-button type="transparent" color="pink">按钮</vi-button>
<vi-button type="transparent" color="yellow">按钮</vi-button>
<vi-button type="transparent" color="blue">按钮</vi-button>
<vi-button type="transparent" color="green">按钮</vi-button>
<vi-button type="transparent" color="dark">按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button type="transparent">按钮</vi-button>
<vi-button type="transparent" color="purple">按钮</vi-button>
<vi-button type="transparent" color="red">按钮</vi-button>
<vi-button type="transparent" color="pink">按钮</vi-button>
<vi-button type="transparent" color="yellow">按钮</vi-button>
<vi-button type="transparent" color="blue">按钮</vi-button>
<vi-button type="transparent" color="green">按钮</vi-button>
<vi-button type="transparent" color="dark">按钮</vi-button>
```

</template>
</code-show>

<!-- 样式组4 -->
<code-show>
<row>
<vi-button mutate type="transparent">按钮</vi-button>
<vi-button mutate type="transparent" color="purple">按钮</vi-button>
<vi-button mutate type="transparent" color="red">按钮</vi-button>
<vi-button mutate type="transparent" color="pink">按钮</vi-button>
<vi-button mutate type="transparent" color="yellow">按钮</vi-button>
<vi-button mutate type="transparent" color="blue">按钮</vi-button>
<vi-button mutate type="transparent" color="green">按钮</vi-button>
<vi-button mutate type="transparent" color="dark">按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button mutate type="transparent">按钮</vi-button>
<vi-button mutate type="transparent" color="purple">按钮</vi-button>
<vi-button mutate type="transparent" color="red">按钮</vi-button>
<vi-button mutate type="transparent" color="pink">按钮</vi-button>
<vi-button mutate type="transparent" color="yellow">按钮</vi-button>
<vi-button mutate type="transparent" color="blue">按钮</vi-button>
<vi-button mutate type="transparent" color="green">按钮</vi-button>
<vi-button mutate type="transparent" color="dark">按钮</vi-button>
```

</template>
</code-show>

### 按钮弧度

通过修改radius属性，可以定义不同的按钮边框弧度

<code-show>
<row>
<vi-button radius="round">按钮</vi-button>
<vi-button radius="round" color="purple">欢迎使用viog-ui</vi-button>
</row>
<row>
<vi-button radius="circle">按钮</vi-button>
<vi-button radius="circle" type="transparent" mutate color="yellow">
  <vi-icon size="big" type="renzheng"/>
</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button radius="round">按钮</vi-button>
<vi-button radius="round" color="purple">欢迎使用viog-ui</vi-button>

<vi-button radius="circle">按钮</vi-button>
<vi-button radius="circle" type="transparent" mutate color="yellow">
  <vi-icon size="big" type="renzheng"/>
</vi-button>
```

</template>
</code-show>

### 禁用

为按钮添加disabled属性开启禁用

<code-show>
<row>
<vi-button disabled >按钮</vi-button>
<vi-button disabled type="plain">按钮</vi-button>
<vi-button disabled type="transparent">按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button disabled >按钮</vi-button>
<vi-button disabled type="plain">按钮</vi-button>
<vi-button disabled type="transparent">按钮</vi-button>
```

</template>
</code-show>

### 尺寸

通过size属性定义大中小按钮

<code-show>
<row>
<vi-button size="big">按钮</vi-button>
<vi-button>按钮</vi-button>
<vi-button size="small">按钮</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-button size="big">按钮</vi-button>
<vi-button>按钮</vi-button>
<vi-button size="small">按钮</vi-button>
```

</template>
</code-show>

## Props
| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| color | 按钮颜色 | 'default' \| 'dark' \| 'red' \| 'green' \| 'yellow' \| 'pink' \| 'blue' \| 'purple' | 'default'
| type| 按钮样式 | 'default' \| 'plain' \| 'transparent' | 'default' |
| radius | 按钮边框弧度 | 'default' \| 'round' \| 'circle' | 'default' |
| size | 按钮大小 | 'big' \| 'middle' \| 'small' | 'middle' |
| disabled | 禁用 | boolean | false |
| mutate | 样式变异 | boolean | false |

## 插槽
| 插槽名 | 描述 |
| - | - |
| 默认插槽 | 按钮内容 |