# viog-ui 0.2.3

https://ayushiqi.github.io/viog-ui/

基于vue3的元宇宙风格ui组件库

特点：活力性  可玩性  原子性

> 组件库使用方式参考elementUI

未来版本bug修复及功能添加：

- 修复dateSelect time组件对于mousewheel事件阻止的优化（已修复）^0.2.4

- 修复scroll组件组maxHeight等判别问题，向表单组件暴露属性修复样式不适配问题 （已修复）

  已修复清单：

  - 删除scroll及virtual-scroll组件width、heigth、maxHeight  props，删除style操作样式方法 ^0.2.4
  - css重写--vi-scroll-width、--vi-scroll-height、--vi-scroll-max-height变量值修改scroll组件样式^0.2.4
  - css重写--vi-virtual-scroll-width、--vi--virtual-scroll-height、--vi-virtual-scroll-max-height变量值修改virtual-scroll组件样式 ^0.2.4
  - 修复virtual-scroll组件max-height样式判别，调整虚拟滚动算法逻辑（暂未支持修改datas数据）
  - 修复virtual-scroll组件对于传入的datas的修改与破坏, 对数据进行进一步的封装隔离^0.2.4
  - 支持virtual-scroll组件传入非对象数组，支持基本类型数组渲染^0.2.4
  - 删除virtual-scroll组件itemHeight属性，内部自动计算itemHeight，详情请看下方说明^0.2.4

- 删除组件width等操控style样式的属性，提供更好的css样式修改环境（目前绝大部分适配失败来源） ^0.6.0

  已修复清单：

  - 调整select组件为虚拟滚动列表 ^0.2.4
  - 增加--vi-dialog-width等一系列css变量，支持复写变量值灵活修改dialog样式，详情见下表 ^0.2.4

- 调整虚拟滚动识别，支持不等高子元素的判别 ^0.7.0
- 调整select框为虚拟滚动，更好的支持大数据渲染。 对最长选择宽度进行适配  ~0.7.0
- 支持select框远程搜索、分类选择、多级选择, composition事件处理输入优化 ~0.7.0
- 添加form组件的rule检查 ~0.7.0
- input框解耦合，新增默认头尾部输入功能 ~0.8.0
- 增添loading，progress， toast，information全局响应功能，更好的支持中间件使用 ~0.9.0

## 使用

```
npm install viog-ui --save
```

- 特殊标注样式属性请添加前缀--viog-组件名-属性名：如Scroll组件width：--viog-scroll-width

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

#### ts类型

````typescript
export { ViButtonType } from 'viog-ui'
````

### Icon

`<ViIcon/>`

#### props参数

- type：string    icon样式

  > 参数：详解icon样式表

- size：string     icon大小

  > 参数：small/middle(default)/big

#### ts类型

````typescript
export type { ViIconType } from 'viog-ui'
````

#### bug

- 在dev环境下，icon字体无法得到正确的映射，生产环境下无bug

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

#### ts类型

````typescript
export type { ViLoadingType } from 'viog-ui'
````

### Dialog

`<ViDialog/>`

该组件处于默认关闭状态，请调用相关方法打开

#### props参数

- defaultOpen：boolean 对话框初始状态 （已弃用该属性，请勿使用）

  > 参数： 默认为false，请不要在该prop上绑定响应式数据，对对话框的操作请调用相关方法

- modelValue: boolean 对话框开闭状态 （可使用v-model语法糖）

  > 参数：默认为false

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

- top：string 对话框距顶部位置 （已弃用，请使用css修改样式）

  > 参数：一个可以被识别的长度单位值，默认20vh

- sure：boolean 是否有确认按键

  > 参数： true(default)/false

- unsure：boolean 是否有取消按键

  > 参数： true(default)/false

- shutdown：boolean 是否有叉叉

  > 参数： true(default)/false

- contentTextAlign：string 内容对齐方式 （已弃用，请使用css修改样式）

  > 参数： left(default)/center/right

- optionTextAlign：string 确认取消按键对齐方式（已弃用，请使用css修改样式）

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

#### ts类型

````typescript
export type { ViDialogType } from 'viog-ui'
````

- open  打开对话框 （已过时，不推荐使用）
- close 关闭对话框 （已过时，不推荐使用）

```typescript
<!-- 父子组件中 -->
<ViDialog ref="child">这里是对话框内容</ViDialog>

<!-- mounted -->
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

#### 样式修改

- width： dialog组件的宽度，默认为400px

  覆写变量：--vi-dialog-width

- height：scroll组件的宽度，默认为auto

  覆写变量：--vi-dialog-height

- content-text-align： dialog组件对话部分的文本对齐方向，默认为left

  覆写变量：--vi-dialog-content-text-align

- option-text-align： dialog组件确认取消的对齐方向，默认为right

  覆写变量：--vi-dialog-option-text-align

```
<ViDialog class="dialog">这里是dialog里的对话内容</ViDialog>

<!-- css -->
// 重写方式
.dialog {
	--vi-dialog-width: 400px;
	--vi-dialog-height: 400px;
}
```

### Scroll

`<ViScroll>`

定义一个滚动区域，区域内容不会被滚动条遮盖

当滚动区域内容超过可视区，自动添加滚动条



#### props参数

- width：number 滚动区域宽度（含滚动条）（已弃用，请通过css修改样式）

  > 参数：一个可以被识别的长度单位值，默认为100%

- height：number 滚动区域高度 （已弃用，请通过css修改样式）

  > 参数：单位只能为px，传入参数时请不要带单位

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

#### ts类型

````typescript
export type { ViScrollType } from 'viog-ui'
````

#### 方法调用

- scrollTo  滚动到响应位置

```typescript
<!-- 父子组件中 -->
<ViScroll ref="child">这里是scroll里的内容</ViScroll>

<!-- mounted -->   - ts -
(this.$refs.child as ViScrollType).scrollTo(0, 140)
```

#### 样式修改

- width： scroll组件的宽度，默认为100%

  覆写变量：--vi-scroll-width

- height：scroll组件的宽度，默认为400px

  覆写变量：--vi-scroll-height

- max-height：scroll组件的max-height属性，默认状态下未定义

  覆写变量：--vi-scroll-max-height

```
<ViScroll class="scroll">这里是scroll里的内容</ViScroll>

<!-- css -->
// 重写方式
.scroll {
	--vi-scroll-width: 400px;
	--vi-scroll-height: 400px;
	--vi-scroll-max-height: 400px;  // 重写max-height会覆盖height的样式
}
```

### VirtualScroll

`<ViVirtualScroll>`

虚拟滚动，支持大数据与长列表快速渲染

仅支持数组数据列表渲染，同一高度只允许存在一个节点

不支持平滑滚动，若有需要请使用普通滚动

**注：组件内部会计算获取scroll容器和item的高度，但由于js特性，无法获取到auto相关属性所渲染出的节点高度，请一定通过--vi-virtual-height或者--vi-virtual-max-height给定容器一个px单位的值，item请给定一个px单位的值**

#### props参数

- width：string 滚动区域宽度（含滚动条）（已弃用，请通过css修改样式）

  > 参数：一个可以被识别的长度单位值，默认为100%

- height：number 滚动区域高度 （已弃用，请通过css修改样式）

  > 参数：单位只能为px，传入参数时请不要带单位

- hidden：boolean 是否隐藏滚动条,隐藏后保持滚动效果

  > 参数：false(default)/true

- color：string 滚动条颜色

  > 参数：grey(default)/black/white/golden/purple

- datas：any[]  item列表数据数组

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

#### ts类型

````typescript
export type { ViVirtualScrollType } from 'viog-ui'
````

#### 对外暴露方法调用

- scrollTo  滚动到响应位置

```typescript
<!-- 父子组件中 -->
<ViVirtualScroll ref="child">这里是scroll里的内容</ViVirtualScroll>

<!-- mounted -->   - ts -
(this.$refs.child as VirtualScrollType).scrollTo(0, 140)
```

#### 样式修改

- width： scroll组件的宽度，默认为100%

  覆写变量：--vi-virtual-scroll-width

- height：virtual-scroll组件的宽度，默认为400px

  覆写变量：--vi-virtual-scroll--height

- max-height：virtual-scroll组件的max-height属性，默认状态下未定义

  覆写变量：--vi-virtual-scroll-max-height

```html
<ViScroll class="scroll">这里是scroll里的内容</ViScroll>

<!-- css -->
// 重写方式
.scroll {
	--vi-virtual-scroll-width: 400px;
	--vi-virtual-scroll-height: 400px;
	--vi-virtual-scroll-max-height: 400px;  // 重写max-height会覆盖height的样式
}
```

### ViInput

`<ViInput>`

基础输入框组件

功能完善中

#### props参数

- modelValue：string input绑定的value，支持v-model （v-mode=“value”  或  ：modelValue=“value”）

  > 参数：必传（若不使用v-model语法糖，请绑定@update:modeValue事件对绑定值进行更新）

- width：string input宽度

  > 参数：一个可以被识别的长度单位值，默认为200px

- size：string 字体大小

  > 参数：middle(default)/big/small(small有点小bug)

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

- input：input内容正确改变事件
- change：input内容正确改变事件，仅在输入框失去焦点和按下回车后触发

#### ts类型

````typescript
export type { ViInputType } from 'viog-ui'
````


#### 对外暴露方法调用

```typescript
<!-- 父子组件中 -->
<ViInput ref="child">placeholder</ViInput>

<!-- mounted -->   - ts -
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

- modelValue： boolean    开关绑定的value，支持v-model （v-mode=“value”  或  ：modelValue=“value”）

  > 参数：必传（若不使用v-model语法糖，请绑定@update:modeValue事件对绑定值进行更新）

- size：string 按钮大小

  > 参数：middle(default)/big/small

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
  
- name：string input原生属性name

  > 参数：无

#### 插槽内容

- left-choice: 左边选项插槽
- right-choice：右边选项插槽
- switch-circle：开关按钮内容插槽

#### 事件支持

- off：关闭开关触发事件
- on：打开开关触发事件
- change：开闭状态变换触发事件

#### ts类型

````typescript
export type { ViSwitchType } from 'viog-ui'
````

#### 对外暴露方法调用

```typescript
<!-- 父子组件中 -->
<ViSwitch ref="child">
    <template v-slot:left-choice>
    	关闭
    </template>
    <template v-slot:switch-circle>
    	哈 // 此插槽适合插入一个icon
    </template>
	<template v-slot:left-choice>
    	打开
    </template>
</ViSwitch>

<!-- mounted -->   - ts -
(this.$refs.child as ViSwitchType).toChange()
```

- toOn 去打开开关(一般用不到)
- toOff 去关闭开关(一般用不到)
- toChange 去改变开关

### ViRadio

`<ViRadio>`

单选框

#### props参数

- modelValue：string | number | boolean  当前单选框组选中的value

  > 参数：必传 (v-model形式)

- name：string | number | boolean 原生属性

  > 参数：默认无

- value：string | number | boolean  该单选框对应的value

  > 参数：必传

- size：string 按钮大小

  > 参数：middle(default)/big/small

- disabled：boolean 是否禁用

  > 参数：false(default)/true

- type：string 单选框样式

  > 参数：default/button

- dark：boolean 基础色调是否为暗色调

  > 参数：false(default)/true

- color：string  选中后的颜色

  > 参数：spurple(default)/purple/red/green/yellow/pink/blue/sred/sgreen/syellow/spink/sblue

#### 插槽内容

- 默认插槽，label的值，默认值为value的值

#### 事件支持

- change：当单选结果发生改变时调用

#### ts类型

````typescript
export type { ViRadioType } from 'viog-ui'
````


#### 对外暴露方法调用

```typescript
<!-- 父子组件中 -->
<ViRadio ref="child">
  睡觉
</ViRadio>

<!-- mounted -->   - ts -
(this.$refs.child as ViRadioType).toPick()
```

- toPick 去选择当前选项

### ViRadioGroup

`<ViRadioGroup>`

功能完善中

#### props参数

- modelValue：string | number | boolean  当前单选框组选中的value

  > 参数：必传 (v-model形式)

#### 插槽内容

- 默认插槽，用于包裹需要简写v-model的所有radio组件，支持插槽内多级dom结构定位

#### ts类型

````typescript
export type { ViRadioGroupType } from 'viog-ui'
````

### ViCheckbox

`<ViCheckbox>`

复选框

#### props参数

- modelValue：undefined[]  当前单选框组选中的value

  > 参数：必传 (v-model形式)

- name：string | number | boolean 原生属性

  > 参数：默认无

- value：string | number | boolean  该单选框对应的value

  > 参数：必传

- size：string 按钮大小

  > 参数：middle(default)/big/small

- disabled：boolean 是否禁用

  > 参数：false(default)/true

- type：string 单选框样式

  > 参数：default/button

- dark：boolean 基础色调是否为暗色调

  > 参数：false(default)/true

- color：string  选中后的颜色

  > 参数：spurple(default)/purple/red/green/yellow/pink/blue/sred/sgreen/syellow/spink/sblue

#### 插槽内容

- 默认插槽，label的值，默认值为value的值

#### 事件支持

- change：当复选选结果发生改变时调用

#### ts类型

````typescript
export type { ViCheckboxType } from 'viog-ui'
````


#### 对外暴露方法调用

```typescript
<!-- 父子组件中 -->
<ViCheckbox ref="child">
  睡觉
</ViCheckbox>

<!-- mounted -->   - ts -
(this.$refs.child as ViCheckbox).toPick()
```

- toPick 去选择当前选项

### ViCheckGroup

`<ViCheckboxGroup>`

功能完善中

#### props参数

- modelValue：undefined[]  当前单选框组选中的value

  > 参数：必传 (v-model形式)

#### 插槽内容

- 默认插槽，用于包裹需要简写v-model的所有checkbox组件，支持插槽内多级dom结构定位

#### ts类型

````typescript
export type { ViCheckboxGroupType } from 'viog-ui'
````

### ViRow

`<ViRow>`

功能完善中

#### props参数

- align：string  主轴布局

  > 参数：默认center

- justify：string  副轴布局

  > 参数：默认space-between

- direction:  string 主轴方向

  > 参数：默认row

- height：string 高度

  > 参数：一个可以被识别的长度单位值，默认为无

- width：string 宽度

  > 参数：一个可以被识别的长度单位值，默认无

#### 插槽内容

- 默认插槽

#### ts类型

````typescript
export type { ViRowType } from 'viog-ui'
````

### ViCol

`<ViCol>`

功能完善中

#### props参数

- align：string  主轴布局

  > 参数：默认center

- justify：string  副轴布局

  > 参数：默认space-between

- direction:  string 主轴方向

  > 参数：默认row

- height：string 高度

  > 参数：一个可以被识别的长度单位值，默认为无

- width：string 宽度

  > 参数：一个可以被识别的长度单位值，默认无

- row：number 在ViGrid中生效，行占位格数

  > 参数：默认1

- col：number 在ViGrid中生效 列占位格数

  > 参数：默认1

#### 插槽内容

- 默认插槽

#### ts类型

````typescript
export type { ViColType } from 'viog-ui'
````

### ViGrid

`<ViGrid>`

功能完善中

#### props参数

- align：string  主轴布局

  > 参数：默认center

- justify：string  副轴布局

  > 参数：默认space-between

- direction:  string 主轴方向

  > 参数：默认row

- height：string 高度

  > 参数：一个可以被识别的长度单位值，默认为无

- width：string 宽度

  > 参数：一个可以被识别的长度单位值，默认无

- row：number 总行数

  > 参数：默认1

- col：number 总列数

  > 参数：默认1

- gap：string  gap大小

  > 参数：默认0

#### 插槽内容

- 默认插槽

#### ts类型

````typescript
export type { ViGridType } from 'viog-ui'
````

### ViSelect

`<ViSelect>`

选择器

bug：暂时未适配跟随最长字长变换input框长款的样式，在0.5.0版本前会进行修复

#### props参数

- modelValue：undefined[] | string  当前单选框组选中的value

  > 参数：必传 (v-model形式) ，除多选传入数组，其余都为一个值

- datas：string[] 可供选择的选项

  > 参数：必传

- size：string select大小

  > 参数：middle(default)/big/small

- disabled：boolean 是否禁用

  > 参数：false(default)/true

- type：string 单选框样式

  > 参数：default/button/plain

- dark：boolean 基础色调是否为暗色调

  > 参数：false(default)/true

- placeholder: string 未选择时缺省值

  > 参数：默认请选择

- multi：boolean 是否为多选

  > 参数：false(default)/true

- width：string 宽度

  > 参数：一个可以被识别的长度单位值，默认200px
  
- filter：boolean 是否为毛玻璃效果

  > 参数：false(default)/true

#### 事件支持

- 暂未实现

#### ts类型

````typescript
export type { ViSelectType } from 'viog-ui'
````

#### 对外暴露方法调用

```typescript
<!-- 父子组件中 -->
<ViSelect ref="child">
  睡觉
</ViSelect>

<!-- mounted -->   - ts -
(this.$refs.child as ViSelectType).toPick()
```

- toClear 清空所有选择

### ViDateSelect

`<ViSelect>`

日期时间选择器

#### props参数

- modelValue：{

  ​	year?: number,

  ​	month?: number,

  ​	date?: number,

  ​	hour?: number,

  ​	minute?: number,

  ​	second?: number

  }  当前选择的日期和时间

  > 参数：必传 (v-model形式) ，属性可根据单位值进行选择传入

- size：string dateSelect 大小  // 暂未实现

  > 参数：middle(default)/big/small

- disabled：boolean 是否禁用

  > 参数：false(default)/true

- type：string 单选框样式 // 暂无

  > 参数：default/button/plain

- dark：boolean 基础色调是否为暗色调

  > 参数：false(default)/true

- placeholder: string 未选择时缺省值

  > 参数：默认请选择

- width：string 宽度

  > 参数：一个可以被识别的长度单位值，默认200px

- filter：boolean 是否为毛玻璃效果  // 暂未实现

  > 参数：false(default)/true

- range：boolean 是否开启范围选择 // 暂未实现

  > 参数：false(default)/true

- unit：string 日期选择器最小单位

  > 参数：date(default)/week(暂时不做)/month/year

- timeUnit：string 时间选择器最小单位，前提为开启时间选择

  > 参数：second(default)/minute/hour
  
- time：boolean 是否启用时间选择器

  > 参数：false(default)/true

#### 事件支持

- 暂未实现

#### ts类型

````typescript
export type { ViSelectType } from 'viog-ui'
````

#### 对外暴露方法调用

```typescript
<!-- 父子组件中 -->
<ViSelect ref="child">
  睡觉
</ViSelect>

<!-- mounted -->   - ts -
(this.$refs.child as ViSelectType).toPick()
```

- toClear 清空所有选择

### ViForm

### ViFormItem

select更新一下虚拟滚动的算法，mounted获取到代码的长度，完成虚拟滚动渲染

- 支持一下多级选项
- 选项分组
- search处理
- 远程搜索处理
- composition事件处理输入优化

input框更新解耦合

form表单的正则以及代码规范

处理一下input的bug

日期选择器的解耦的做好优化处理

文件上传组件

进度条

table

list

message，toast，骨架框，navigation。。。
