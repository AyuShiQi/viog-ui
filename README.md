# viog-ui

基于vue3的元宇宙风格ui组件库

特点：活力性  可玩性  原子性

> 组件库使用方式参考elementUI

## 组件

### button

` <ViButton/>` 

#### props参数

- color ：string  按钮颜色

  > 参数：grey(default)/black/red/green/yellow/pink/blue
  >
  > sgrey/sred/sgreen/syellow/spink/sblue

- type ：string  按钮风格

  > 参数：default/plain/transparent

- radius：string  按钮边框弧度

  > 参数：default/round/circle

- disabled ：boolean 是否禁用

- small：bolean 是否使用小尺寸

#### 事件支持

- click 点击事件

#### 插槽

- 默认插槽，按钮内容

### Icon

`<ViIcon/>`

#### props参数

- type：string    icon样式

  > 参数：详解icon样式表

- size：string     icon大小

  > 参数：small/middle(default)/big

### Loading

`<ViLoading/>`

#### props参数

- type：string 加载动画样式

  > 参数：circle(default)/diamond/ball/disk/star
  
- color：string 加载动画颜色

  > 参数：详情见下表

- size：string 加载动画大小

  > 参数：详情见下表

#### 加载动画props详解

##### circle

- color：string 颜色

  > 参数：grey(default)/white/purple/golden/blue/green/red/pink

- size：string 大小

  > 参数：默认为50px

##### ball

- color：string 颜色

  > 参数：grey(default)/white/purple/golden/blue/green/red/pink

- size：string 大小

  > 参数：默认为50px

##### disk

- color：string 颜色

  > 参数：grey(default)/white/purple/golden/blue/green/red/pink

- size：string 大小

  > 参数：默认为200px

##### star

- color：string 颜色

  > 参数：grey(default)/white/purple/golden/blue/green/red/pink

- size：string 大小

  > 参数：默认为200px

##### diamond

- color：string 颜色

  > 参数：colorful(default)/white/purple

- diamond无size参数，默认大小为60*120



### Dialog

`<ViDialog/>`

该组件处于默认关闭状态，请调用相关方法打开

#### props参数

- defaultOpen：boolean 对话框初始状态

  > 参数： 默认为false，请不要在该prop上绑定响应式数据，对对话框的操作请调用相关方法

- title：string 标题

  > 参数： 默认为空字符串

- mask：boolean 是否有遮罩层

  > 参数： true/false(default)

- maskColor：string 遮罩层颜色

  > 参数：black(default)/white/golden

- maskFilter：boolean 遮罩层是否进行模糊

  > 参数： true/false(default)

- background：string 对话框背景色

  > 参数：black/white(default)/golden

- color：string 字体颜色

  > 参数：black(default)/white/golden/purple

- filter：boolean 对话框是否进行模糊

  > 参数： true/false(default)

- shadow：boolean 对话框是否添加阴影

  > 参数： true/false(default)

- top：string 对话框距顶部位置

  > 参数：一个可以被识别的长度单位值，默认20vh

- sure：boolean 是否有确认按键

  > 参数： true(default)/false

- unsure：boolean 是否有取消按键

  > 参数： true(default)/false

- shutdown：boolean 是否有叉叉

  > 参数： true(default)/false

- contentTextAlign：string 内容对齐方式

  > 参数： left(default)/center/right

- optionTextAlign：string 确认取消按键对齐方式

  > 参数： left/center/right(default)
  
- toSure：()=>boolean 控制按下确认按键是否关闭对话框

  > 参数： 默认函数返回true，暂不支持异步函数

- toUnsure：()=>boolean 控制按下取消按键是否关闭对话框

  > 参数： 默认函数返回true，暂不支持异步函数

- toShutDown：()=>boolean 控制按下叉叉按键是否关闭对话框

  > 参数：默认函数返回true，暂不支持异步函数

#### 事件支持

- Sure：确认事件

  > @sure(不支持控制关闭)   or      :toSure="()=>boolean"(函数返回值true or false可以控制是否关闭)

- unSure：取消事件

  > @unSure(不支持控制关闭)    or     :toUnsure="()=>boolean"(函数返回值true or false可以控制是否关闭)

- shutDown：叉叉关闭事件

  > @shutDown(不支持控制关闭)    or     :toShutDown="()=>boolean)"(函数返回值true or false可以控制是否关闭)

#### 对外暴露方法调用

- open  打开对话框
- close 关闭对话框

```typescript
<!-- 父子组件中 -->
<ViDialog ref="child">这里是对话框内容</ViDialog>

<!-- mounted -->   - ts -
type ViDialogType = {
  open: (time?: number) => void,
  close: (time?: number) => void
}

// 即刻打开
(this.$refs.child as ViDialogType).open()
// 延迟200ms打开
(this.$refs.child as ViDialogType).open(200)
// 即刻关闭
(this.$refs.child as ViDialogType).close()
// 延迟200ms关闭
(this.$refs.child as ViDialogType).close(200)
```

#### 插槽

- 默认插槽，对话框内容

### Scroll

`<ViScroll>`

定义一个滚动区域，区域内容不会被滚动条遮盖

当滚动区域内容超过可视区，自动添加滚动条



#### props参数

- width：string 滚动区域宽度（含滚动条）

  > 参数：一个可以被识别的长度单位值，默认为100%

- height：string 滚动区域高度

  > 参数：一个可以被识别的长度单位值，默认为0

- hidden：boolean 是否隐藏滚动条,隐藏后保持滚动效果

  > 参数：false(default)/true

- color：string 滚动条颜色

  > 参数：grey(default)/black/white/golden/purple

- lazy: function  滚动区域懒加载回调函数，传入该参数默认实现无限滚动

  注意：请传入一个异步函数，懒加载自动实现节流，待lazy函数返回结果后，才将再次监听事件触发lazy函数

  > 参数：默认为空

- smooth: boolean  瞬间滚动是否为平滑效果

  > 参数：false(default)/true

- wait: string  等待缺省加载动画，前提传入无限滚动回调函数开启懒加载

  > 参数：无缺省样式(default)/circle/ball/disk/star
  >
  > 建议使用circle与ball样式，更合适

- waitText: string  等待缺省文字，若有加载动画，传入文字将跟在加载动画后面

  > 参数：默认为空字符串
  
- finish: boolean  用于懒加载中，代表加载数据是否完成

  > 参数：默认为false，未加载完成

#### 插槽内容

- 默认插槽，滚动区域内容

#### 事件支持

- scroll：滚动事件

#### 方法调用

- scrollTo  滚动到响应位置

```typescript
<!-- 父子组件中 -->
<ViScroll ref="child">这里是scroll里的内容</ViScroll>

<!-- mounted -->   - ts -
interface ViScrollType {
    scrollTo: (x: number, y: number) => void
}

(this.$refs.child as ViScrollType).scrollTo(0, 140)
```

### VirtualScroll

`<ViVirtualScroll>`

虚拟滚动，支持大数据与长列表快速渲染

仅支持数组数据列表渲染，同一高度只允许存在一个节点

不支持平滑滚动，若有需要请使用普通滚动

#### props参数

- width：string 滚动区域宽度（含滚动条）

  > 参数：一个可以被识别的长度单位值，默认为100%

- height：number 滚动区域高度

  > 参数：单位只能为px，传入参数时请不要带单位

- hidden：boolean 是否隐藏滚动条,隐藏后保持滚动效果

  > 参数：false(default)/true

- color：string 滚动条颜色

  > 参数：grey(default)/black/white/golden/purple

- itemHeight：number 列表元组高度

  > 参数：必传，单位为px，传入参数是不要带单位

- datas：object[] 列表数据数组

  > 参数：必传

#### 插槽内容

- 默认插槽，传入数据渲染模板

> 插槽暴露了一个对象data 
>
> 父组件内对template 等 v-slot="vi" 绑定作用域
>
> 通过vi.data可以用于表示传入的datas中的某个对象

#### 事件支持

- scroll：滚动事件

#### 对外暴露方法调用

- scrollTo  滚动到响应位置

```typescript
<!-- 父子组件中 -->
<ViVirtualScroll ref="child">这里是scroll里的内容</ViVirtualScroll>

<!-- mounted -->   - ts -
interface VirtualScrollType {
    scrollTo: (x: number, y: number) => void
}

(this.$refs.child as VirtualScrollType).scrollTo(0, 140)
```

### ViInput

`<ViInput>`

基础输入框组件

#### props参数

- value：string input绑定的value，需通过相关的事件获取新的值完成双向绑定

  > 参数：必传

- width：string input宽度

  > 参数：一个可以被识别的长度单位值，默认为200px

- size：string 字体大小

  > 参数：middle(default)/big

- password：boolean 是否为password输入框

  > 参数：false(default)/true

- showPassword：boolean 是否显示密码隐藏显示按钮

  > 参数：false(default)/true

- showClear：boolean 是否显示清除内容按钮

  > 参数：false(default)/true

- disabled：boolean 是否禁用

  > 参数：false(default)/true

- name：string input原生属性name

  > 参数：无

- type：string 输入框样式

  > 参数：default/plain

- round：boolean input边框是否为round，仅在type为plain时生效

  > 参数：false(default)/true

- dark：boolean 输入框基础色调是否为暗色调

  > 参数：false(default)/true

- color：string 输入框focus后颜色

  > 参数：default/purple/golden/blue/green/red/pink/yellow

- right：boolean 输入框是否展示正确状态样式

  > 参数：false(default)/true

- warn：boolean 输入框是否展示警示状态样式

  > 参数：false(default)/true

- error：boolean 输入框是否展示错误状态样式

  > 参数：false(default)/true

- number：boolean 输入框是否只能输入数字

  > 参数：false(default)/true

- autofocus：boolean 是否初次聚焦，一个界面中只能存在一个

  > 参数：false(default)/true

- maxLength：number 输入的最大长度

  > 参数：默认为不限定

#### 插槽内容

- 默认插槽，placeholder内容

#### 事件支持

- inputValue：input内容正确改变事件

  > 该事件向回调函数传入一个参数newValue，是当前输入框的value
  
- changeValue：input内容正确改变事件，仅在输入框失去焦点和按下回车后触发

  > 该事件向回调函数传入一个参数newValue，是当前输入框的value

#### 对外暴露方法调用

```typescript
<!-- 父子组件中 -->
<ViInput ref="child">placeholder</ViInput>

<!-- mounted -->   - ts -
interface ViInputType {
  toClear: () => void,
  toFocus: () => void,
  toBlur: () => void
}

(this.$refs.child as ViInputType).toClear()
```

- toClear 清除输入框内容 （同时触发changeValue和inputValue事件）
- toFocus 获取焦点
- toBlur 失去焦点

### ViSwitch

`<ViSwitch>`

开关

样式种类待完善中

#### props参数

- size：string 按钮大小

  > 参数：middle(default)/big

- disabled：boolean 是否禁用

  > 参数：false(default)/true

- type：string 按钮样式

  > 参数：default

- dark：boolean 基础色调是否为暗色调

  > 参数：false(default)/true

- leftColor：string  off的颜色

  > 参数：任意颜色，默认灰色调

- rightColor：string  on的颜色

  > 参数：任意颜色，默认紫色调

#### 插槽内容

- left-choice: 左边选项插槽
- right-choice：右边选项插槽
- switch-circle：开关按钮内容插槽

#### 事件支持

- off：关闭开关触发事件

- on：打开开关触发事件
- change：开闭状态变换触发事件

#### 对外暴露方法调用

```typescript
<!-- 父子组件中 -->
<ViSwitch ref="child">
    <template v-slot:left-choice>
    	关闭
    </template>
    <template v-slot:switch-circle>
    	哈
    </template>
	<template v-slot:left-choice>
    	打开
    </template>
</ViSwitch>

<!-- mounted -->   - ts -
interface ViSwitchType {
  toOn: () => void,
  toOff: () => void,
  toChange: () => void
}

(this.$refs.child as ViSwitchType).toOn()
```

- toOn 去打开开关
- toOff 去关闭开关
- toChange 去改变开关
