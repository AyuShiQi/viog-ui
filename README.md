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

该组件处于默认关闭状态，请调用相关方法打开

#### props参数

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

  > 参数：black(default)/white/golden

- filter：boolean 对话框是否进行模糊

  > 参数： true/false(default)

- shadow：boolean 对话框是否添加阴影

  > 参数： true/false(default)

- top：string 对话框距顶部位置

  > 参数：一个可以被识别的长度单位值

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

- shutDown：关闭事件

  > @shutDown(不支持控制关闭)    or     :toShutDown="()=>boolean)"(函数返回值true or false可以控制是否关闭)

#### 方法调用

- open  打开对话框
- close 关闭对话框

```typescript
<!-- 父子组件中 -->
<ViDialog ref="child"><ViDialog/>

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
