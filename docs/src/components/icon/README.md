# 图标 icon

本组件库集合了一套icon图标供以使用

::: tip
本套icon来自iconfont-阿里巴巴矢量图标库，可以免费商用
:::

## 简单引入

此方法引入一个icon图标，你可以将icon插在任何地方

<code-show>
<row>
<vi-icon></vi-icon>
</row>
<template v-slot:code>

``` vue
<vi-icon></vi-icon>
```

</template>
</code-show>

## 样式操控

### 图标类型

你可以通过控制type属性定义不同样式的图标

<code-show>
<row>
<vi-icon type="shanchu" class="my-icon-green"></vi-icon>
<vi-icon type="gengduo" class="my-icon-yellow"></vi-icon>
<vi-icon type="shijian"></vi-icon>
<vi-icon type="shouye" class="my-icon-pink"></vi-icon>
</row>
<template v-slot:code>

``` vue
<vi-icon type="shanchu" class="my-icon-green"></vi-icon>
<vi-icon type="gengduo" class="my-icon-yellow"></vi-icon>
<vi-icon type="shijian"></vi-icon>
<vi-icon type="shouye" class="my-icon-pink"></vi-icon>

<style>
  .my-icon-green {
    color: var(--vi-green-color2)
  }
  .my-icon-yellow {
    color: var(--vi-yellow-color2)
  }
  .my-icon-pink {
    color: var(--vi-pink-color2)
  }
</style>
```
</template>
</code-show>

这里给出了所有图标的type属性名称

### 尺寸

通过size属性控制图标的大小，你也可以直接定义元素的font-size自定义字体大小

<code-show>
<row>
<vi-icon class="my-icon-48px"></vi-icon>
<vi-icon size="big"></vi-icon>
<vi-icon></vi-icon>
<vi-icon size="small"></vi-icon>
</row>
<template v-slot:code>

``` vue
<vi-icon type="big"></vi-icon>
<vi-icon></vi-icon>
<vi-icon type="small"></vi-icon>
```
</template>
</code-show>


<style>
.my-icon-green {
    color: var(--vi-green-color2);
}
.my-icon-yellow {
    color: var(--vi-yellow-color2);
}
.my-icon-pink {
    color: var(--vi-pink-color2);
}
.my-icon-48px {
    font-size: 48px;
}
</style>