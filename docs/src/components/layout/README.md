---
sidebarDepth: 1
---

# 布局 layout <Badge type="warning" text="待优化" vertical="middle"/>

通过`row` `grid` `col` 组件快速进行flex布局或grid布局

::: warning

布局类组件目前处于开发状态，功能尚不完善，后续版本将持续更新

:::

## Row 组件

`row`组件为一个flex盒子、用于划分一行

### 布局

使用align属性定义align-items与align-content属性，justify属性定义justify-content属性  

属性默认值分别为：center、space-between

<code-show>
<vi-row class="layout-row">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>

<vi-row class="layout-row" justify="flex-start">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>

<vi-row class="layout-row" justify="flex-end" align="flex-start">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>

<vi-row class="layout-row" justify="space-around" align="flex-end">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>
<template v-slot:code>

``` vue
<vi-row>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>

<vi-row justify="flex-start">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>

<vi-row justify="flex-end" align="flex-start">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>

<vi-row justify="space-around" align="flex-end">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>
```

</template>
</code-show>

### 方向

dirction属性用于定义布局方向，属性值同flex-direction

<code-show>
<vi-row class="layout-row" direction="column">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>
<template v-slot:code>

``` vue
<vi-row direction="column">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-row>
```

</template>
</code-show>

### 间隙

你可以通过gap属性定义元素间隙

<code-show>
<vi-row class="layout-row" justify="flex-start" gap="16px">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
</vi-row>
<template v-slot:code>

``` vue
<vi-row justify="flex-start" gap="16px">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-big"></div>
</vi-row>
```

</template>
</code-show>

## Grid 组件

`grid`组件为一个grid盒子

### 布局

`grid`组件使用row与col属性定义盒子的行数与列数，默认行列数均为1

<code-show>
<vi-grid class="layout-row">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-grid>
<template v-slot:code>

``` vue
<vi-grid>
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-grid>
```

</template>
</code-show>

### 行列控制

通过row与col属性定义盒子总体行列数

<code-show>
<vi-grid class="layout-row" :col="2">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-grid>

<vi-grid class="layout-row" :col="3">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-grid>
<template v-slot:code>

``` vue
<vi-grid :col="2">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-grid>

<vi-grid :col="3">
<div class="layout-row__box-big"></div>
<div class="layout-row__box-middle"></div>
<div class="layout-row__box-small"></div>
</vi-grid>
```

</template>
</code-show>

## col 组件

通过`col`与`grid`组件的配合，可以定义盒子所占行列数

<code-show>
<vi-grid class="layout-grid" :col="3" :row="2">
<vi-col class="layout-grid__box-big" :col="2" :row="2"></vi-col>
<vi-col class="layout-grid__box-middle"></vi-col>
<vi-col class="layout-grid__box-small"></vi-col>
</vi-grid>
<template v-slot:code>

``` vue
<vi-grid class="layout-grid" :col="3" :row="2">
<vi-col class="layout-grid__box-big" :col="2" :row="2"></vi-col>
<vi-col class="layout-grid__box-middle"></vi-col>
<vi-col class="layout-grid__box-small"></vi-col>
</vi-grid>

<style>
.layout-grid {
    width: 100%;
    height: 80px;
}
</style>
```

</template>
</code-show>

## Props

### Row

| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| align | 主轴对齐 | 同align-items与align-content属性 | 'center' |
| justify | 副轴对齐 | 同justify-content属性 | 'space-between' |
| direction | 布局方向 | 同flex-direction | 'row' |
| gap | 盒子间隙 | 同gap属性 | 0 |

### Grid

| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| gap | 盒子间隙 | 同gap属性 | '0' |
| row | grid组件专用，占位行数 | number | 1 |
| col | grid组件专用，占位列数 | number | 1 |

### Col

| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| align | 主轴对齐 | 同align-items与align-content属性 | 'center' |
| justify | 副轴对齐 | 同justify-content属性 | 'space-between' |
| direction | 布局方向 | 同flex-direction | 'row' |
| row | grid组件专用，占位行数 | number | 1 |
| col | grid组件专用，占位列数 | number | 1 |

## 插槽

布局组件均只存在默认插槽

| 插槽名 | 描述 |
| - | - |
| 默认插槽 | 布局内容 |

<style>
.layout-row {
    margin: 8px 0;
}

.layout-row__box-big {
    width: 80px;
    height: 100px;
    background-color: var(--vi-purple-color3)
}

.layout-row__box-middle {
    width: 40px;
    height: 80px;
    background-color: var(--vi-pink-color3)
}

.layout-row__box-small {
    width: 20px;
    height: 50px;
    background-color: var(--vi-blue-color3)
}

.layout-grid {
    margin: 8px 0;
    width: 100%;
    height: 80px;
}

.layout-grid__box-big {
    background-color: var(--vi-purple-color3)
}

.layout-grid__box-middle {
    background-color: var(--vi-pink-color3)
}

.layout-grid__box-small {
    background-color: var(--vi-blue-color3)
}
</style>