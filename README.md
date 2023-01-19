# viog-ui

基于vue3的元宇宙风格ui组件库

特点：活力性  可玩性  原子性

> 组件库使用方式参考elementUI

## 组件

### button

` <ViButton/>` 

#### props参数

- color ：string  按钮颜色

  > 参数：grey(default)/red/green/yellow/pink/blue
  >
  > sgrey/sred/sgreen/syellow/spink/sblue

- type ：string  按钮风格

  > 参数：default/plain/transparent

- radius：string  按钮边框弧度

  > 参数：default/round/circle

- disabled ：boolean 是否禁用

- small：bolean 是否使用小尺寸

#### 事件支持

- click点击事件

### Icon

`<ViIcon/>`

#### props参数

- type：icon样式

  > 参数：详解icon样式表

- size：icon大小

  > 参数：small/middle(default)/big

### Load

`<ViLoading/>`

#### props参数

- type：加载动画样式

  > 参数：diamond(default)

### Dialog

`<ViDialog/>`

#### props参数

#### 事件支持

- sure：确认事件
- delete：取消事件
- forceDelete：取消事件
