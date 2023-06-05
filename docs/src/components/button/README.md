# 按钮 button

## 简单引用
``` html
<vi-button>按钮</vi-button>
``` 
使用此方法引入最基础的按钮样式
<vi-button>按钮</vi-button>

## 样式操控
### 颜色

我们共有六种颜色的按钮，使用属性color进行调控

<vi-row>
<vi-button>按钮</vi-button>
<vi-button color="purple">按钮</vi-button>
<vi-button color="red">按钮</vi-button>
<vi-button color="pink">按钮</vi-button>
<vi-button color="yellow">按钮</vi-button>
<vi-button color="blue">按钮</vi-button>
<vi-button color="green">按钮</vi-button>
<vi-button color="dark">按钮</vi-button>
</vi-row>

``` html
<vi-button>按钮</vi-button>
<vi-button color="purple">按钮</vi-button>
<vi-button color="red">按钮</vi-button>
<vi-button color="pink">按钮</vi-button>
<vi-button color="yellow">按钮</vi-button>
<vi-button color="blue">按钮</vi-button>
<vi-button color="green">按钮</vi-button>
<vi-button color="golden">按钮</vi-button>
<vi-button color="black">按钮</vi-button>
``` 

你还可以通过添加mutate属性，将按钮颜色变异，使按钮颜色更加绚烂

<vi-row>
<vi-button>按钮</vi-button>
<vi-button mutate color="purple">按钮</vi-button>
<vi-button mutate color="red">按钮</vi-button>
<vi-button mutate color="pink">按钮</vi-button>
<vi-button mutate color="yellow">按钮</vi-button>
<vi-button mutate color="blue">按钮</vi-button>
<vi-button mutate color="green">按钮</vi-button>
<vi-button color="dark">按钮</vi-button>
</vi-row>

``` html
<vi-button>按钮</vi-button>
<vi-button mutate color="purple">按钮</vi-button>
<vi-button mutate color="red">按钮</vi-button>
<vi-button mutate color="pink">按钮</vi-button>
<vi-button mutate color="yellow">按钮</vi-button>
<vi-button mutate color="blue">按钮</vi-button>
<vi-button mutate color="green">按钮</vi-button>
<vi-button mutate color="golden">按钮</vi-button>
<vi-button color="black">按钮</vi-button>
``` 
需要注意的是，默认/dark颜色按钮，mutate属性无效

### 样式

通过修改type属性、配合mutate属性，可以定义不同的按钮样式

<vi-row>
<vi-button type="plain">按钮</vi-button>
<vi-button type="plain" color="purple">按钮</vi-button>
<vi-button type="plain" color="red">按钮</vi-button>
<vi-button type="plain" color="pink">按钮</vi-button>
<vi-button type="plain" color="yellow">按钮</vi-button>
<vi-button type="plain" color="blue">按钮</vi-button>
<vi-button type="plain" color="green">按钮</vi-button>
<vi-button type="plain" color="dark">按钮</vi-button>
</vi-row>
<vi-row>
<vi-button mutate type="plain">按钮</vi-button>
<vi-button mutate type="plain" color="purple">按钮</vi-button>
<vi-button mutate type="plain" color="red">按钮</vi-button>
<vi-button mutate type="plain" color="pink">按钮</vi-button>
<vi-button mutate type="plain" color="yellow">按钮</vi-button>
<vi-button mutate type="plain" color="blue">按钮</vi-button>
<vi-button mutate type="plain" color="green">按钮</vi-button>
<vi-button mutate type="plain" color="dark">按钮</vi-button>
</vi-row>
<vi-row>
<vi-button type="transparent">按钮</vi-button>
<vi-button type="transparent" color="purple">按钮</vi-button>
<vi-button type="transparent" color="red">按钮</vi-button>
<vi-button type="transparent" color="pink">按钮</vi-button>
<vi-button type="transparent" color="yellow">按钮</vi-button>
<vi-button type="transparent" color="blue">按钮</vi-button>
<vi-button type="transparent" color="green">按钮</vi-button>
<vi-button type="transparent" color="dark">按钮</vi-button>
</vi-row>

<vi-row>
<vi-button mutate type="transparent">按钮</vi-button>
<vi-button mutate type="transparent" color="purple">按钮</vi-button>
<vi-button mutate type="transparent" color="red">按钮</vi-button>
<vi-button mutate type="transparent" color="pink">按钮</vi-button>
<vi-button mutate type="transparent" color="yellow">按钮</vi-button>
<vi-button mutate type="transparent" color="blue">按钮</vi-button>
<vi-button mutate type="transparent" color="green">按钮</vi-button>
<vi-button mutate type="transparent" color="dark">按钮</vi-button>
</vi-row>

``` html
<vi-row>
<vi-button type="plain">按钮</vi-button>
<vi-button type="plain" color="purple">按钮</vi-button>
<vi-button type="plain" color="red">按钮</vi-button>
<vi-button type="plain" color="pink">按钮</vi-button>
<vi-button type="plain" color="yellow">按钮</vi-button>
<vi-button type="plain" color="blue">按钮</vi-button>
<vi-button type="plain" color="green">按钮</vi-button>
<vi-button type="plain" color="dark">按钮</vi-button>
</vi-row>
<vi-row>
<vi-button mutate type="plain">按钮</vi-button>
<vi-button mutate type="plain" color="purple">按钮</vi-button>
<vi-button mutate type="plain" color="red">按钮</vi-button>
<vi-button mutate type="plain" color="pink">按钮</vi-button>
<vi-button mutate type="plain" color="yellow">按钮</vi-button>
<vi-button mutate type="plain" color="blue">按钮</vi-button>
<vi-button mutate type="plain" color="green">按钮</vi-button>
<vi-button mutate type="plain" color="dark">按钮</vi-button>
</vi-row>
<vi-row>
<vi-button type="transparent">按钮</vi-button>
<vi-button type="transparent" color="purple">按钮</vi-button>
<vi-button type="transparent" color="red">按钮</vi-button>
<vi-button type="transparent" color="pink">按钮</vi-button>
<vi-button type="transparent" color="yellow">按钮</vi-button>
<vi-button type="transparent" color="blue">按钮</vi-button>
<vi-button type="transparent" color="green">按钮</vi-button>
<vi-button type="transparent" color="dark">按钮</vi-button>
</vi-row>

<vi-row>
<vi-button mutate type="transparent">按钮</vi-button>
<vi-button mutate type="transparent" color="purple">按钮</vi-button>
<vi-button mutate type="transparent" color="red">按钮</vi-button>
<vi-button mutate type="transparent" color="pink">按钮</vi-button>
<vi-button mutate type="transparent" color="yellow">按钮</vi-button>
<vi-button mutate type="transparent" color="blue">按钮</vi-button>
<vi-button mutate type="transparent" color="green">按钮</vi-button>
<vi-button mutate type="transparent" color="dark">按钮</vi-button>
</vi-row>
```

### 按钮弧度

通过修改radius属性，可以定义不同的按钮边框弧度

<vi-row justify="flex-start" :style="{
    gap: '8px'
}">
<vi-button radius="round">按钮</vi-button>
<vi-button radius="round" color="purple">欢迎使用viog-ui</vi-button>
</vi-row>

<vi-row justify="flex-start" :style="{
    gap: '8px'
}">
<vi-button radius="circle">按钮</vi-button>
<vi-button radius="circle" type="transparent" mutate color="yellow">
  <vi-icon size="big" type="renzheng"/>
</vi-button>
</vi-row>

``` html
<vi-row justify="flex-start" :style="{
    gap: '8px'
}">
<vi-button radius="round">按钮</vi-button>
<vi-button radius="round" color="purple">欢迎使用viog-ui</vi-button>
</vi-row>

<vi-row justify="flex-start" :style="{
    gap: '8px'
}">
<vi-button radius="circle">按钮</vi-button>
<vi-button radius="circle" type="transparent" mutate color="yellow">
  <vi-icon size="big" type="renzheng"/>
</vi-button>
</vi-row>
```
### 禁用

为按钮添加disabled属性开启禁用

<vi-row justify="flex-start" :style="{
    gap: '8px'
}">
<vi-button disabled >按钮</vi-button>
<vi-button disabled type="plain">按钮</vi-button>
<vi-button disabled type="transparent">按钮</vi-button>
</vi-row>

``` html
<vi-row justify="flex-start" :style="{
    gap: '8px'
}">
<vi-button disabled >按钮</vi-button>
<vi-button disabled type="plain">按钮</vi-button>
<vi-button disabled type="transparent">按钮</vi-button>
</vi-row>
```
### 尺寸

通过size属性定义大中小按钮

<vi-row justify="flex-start" :style="{
    gap: '8px'
}">
<vi-button size="big">按钮</vi-button>
<vi-button>按钮</vi-button>
<vi-button size="small">按钮</vi-button>
</vi-row>

``` html
<vi-row justify="flex-start" :style="{
    gap: '8px'
}">
<vi-button size="big">按钮</vi-button>
<vi-button>按钮</vi-button>
<vi-button size="small">按钮</vi-button>
</vi-row>
```

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

<style>
    .vi-row {
        margin: 16px 0;
    }
</style>