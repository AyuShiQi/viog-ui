# 颜色
该组件库规定了一套调色板

## 装饰色
我们规定了六套装饰色系（分别为：purple、red、pink、yellow、blue、green），适应不同场景的不同需求  
你也可以重新定义覆盖这些css变量，个性化你自己的调色盘。需要注意的是：color5一般为一个透明度较高的颜色，其它颜色则为实色

<vi-row justify="space-between">
  <ul class="color-palette color-palette-purple">
    <span class="color-palette-item">--vi-purple-color1</span>
    <span class="color-palette-item">--vi-purple-color2</span>
    <span class="color-palette-item">--vi-purple-color3</span>
    <span class="color-palette-item">--vi-purple-color4</span>
    <span class="color-palette-item">--vi-purple-color5</span>
  </ul>
  <ul class="color-palette color-palette-red">
    <span class="color-palette-item">--vi-red-color1</span>
    <span class="color-palette-item">--vi-red-color2</span>
    <span class="color-palette-item">--vi-red-color3</span>
    <span class="color-palette-item">--vi-red-color4</span>
    <span class="color-palette-item">--vi-red-color5</span>
  </ul>
  <ul class="color-palette color-palette-pink">
    <span class="color-palette-item">--vi-pink-color1</span>
    <span class="color-palette-item">--vi-pink-color2</span>
    <span class="color-palette-item">--vi-pink-color3</span>
    <span class="color-palette-item">--vi-pink-color4</span>
    <span class="color-palette-item">--vi-pink-color5</span>
  </ul>
</vi-row>
<vi-row justify="space-between">
  <ul class="color-palette color-palette-yellow">
    <span class="color-palette-item">--vi-yellow-color1</span>
    <span class="color-palette-item">--vi-yellow-color2</span>
    <span class="color-palette-item">--vi-yellow-color3</span>
    <span class="color-palette-item">--vi-yellow-color4</span>
    <span class="color-palette-item">--vi-yellow-color5</span>
  </ul>
  <ul class="color-palette color-palette-blue">
    <span class="color-palette-item">--vi-blue-color1</span>
    <span class="color-palette-item">--vi-blue-color2</span>
    <span class="color-palette-item">--vi-blue-color3</span>
    <span class="color-palette-item">--vi-blue-color4</span>
    <span class="color-palette-item">--vi-blue-color5</span>
  </ul>
  <ul class="color-palette color-palette-green">
    <span class="color-palette-item">--vi-green-color1</span>
    <span class="color-palette-item">--vi-green-color2</span>
    <span class="color-palette-item">--vi-green-color3</span>
    <span class="color-palette-item">--vi-green-color4</span>
    <span class="color-palette-item">--vi-green-color5</span>
  </ul>
</vi-row>

其中，紫色是我们默认的组件库主色系，如果您需要更改主色系，只需要修改以下css变量即可：

- --vi-main-color1
- --vi-main-color2
- --vi-main-color3
- --vi-main-color4
- --vi-main-color5
- --vi-main-color6: 此颜色仅用于控制time-select组件中的选中元素颜色：rgba(181, 136, 233, 0.3)

## 中性色
除装饰色外，我们规定了一套中性色用于文本、边框等部分
<vi-row justify="space-between" align="flex-start">
  <ul class="color-palette color-palette-black">
    <span class="color-palette-item">--vi-font-color</span>
    <span class="color-palette-item">--vi-link-color</span>
    <span class="color-palette-item">--vi-icon-color</span>
    <span class="color-palette-item">--vi-background-color-deep</span>
    <span class="color-palette-item">--vi-background-color</span>
  </ul>

  <ul class="color-palette color-palette-dark">
    <span class="color-palette-item">--vi-dark-color1</span>
    <span class="color-palette-item">--vi-dark-color2</span>
    <span class="color-palette-item">--vi-dark-color3</span>
    <span class="color-palette-item">--vi-dark-color4</span>
  </ul>

  <ul class="color-palette color-palette-golden">
    <span class="color-palette-item">--vi-golden-color1</span>
    <span class="color-palette-item">--vi-golden-color2</span>
  </ul>
</vi-row>

## 使用
如果需要使用上方这些颜色，只需要引用对应的css变量即可  
你也可以在自定义覆盖这些变量，完成你的个性化订制，全局更改建议在:root里定义，仅对一个组件色系更改，可以在类名vi-组件名中更改

<script setup>
import { ref } from 'vue'
</script>

<style>
.color-palette {
  overflow: hidden;
  width: 200px;
  padding: 0;
  list-style: none;
  border-radius: var(--vi-card-radius);
}

.color-palette-item {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
}

.color-palette .color-palette-item:nth-child(-n+3) {
    color: #fff
}

.color-palette .color-palette-item:nth-child(n+4) {
    color: var(--vi-link-color)
}

.color-palette-purple .color-palette-item:nth-child(1) {
    background-color: var(--vi-purple-color1)
}
.color-palette-purple .color-palette-item:nth-child(2) {
    background-color: var(--vi-purple-color2)
}
.color-palette-purple .color-palette-item:nth-child(3) {
    background-color: var(--vi-purple-color3)
}
.color-palette-purple .color-palette-item:nth-child(4) {
    background-color: var(--vi-purple-color4)
}
.color-palette-purple .color-palette-item:nth-child(5) {
    background-color: var(--vi-purple-color5)
}
.color-palette-purple .color-palette-item:nth-child(6) {
    background-color: var(--vi-purple-color6)
}

.color-palette-red .color-palette-item:nth-child(1) {
    background-color: var(--vi-red-color1)
}
.color-palette-red .color-palette-item:nth-child(2) {
    background-color: var(--vi-red-color2)
}
.color-palette-red .color-palette-item:nth-child(3) {
    background-color: var(--vi-red-color3)
}
.color-palette-red .color-palette-item:nth-child(4) {
    background-color: var(--vi-red-color4)
}
.color-palette-red .color-palette-item:nth-child(5) {
    background-color: var(--vi-red-color5)
}

.color-palette-pink .color-palette-item:nth-child(1) {
    background-color: var(--vi-pink-color1)
}
.color-palette-pink .color-palette-item:nth-child(2) {
    background-color: var(--vi-pink-color2)
}
.color-palette-pink .color-palette-item:nth-child(3) {
    background-color: var(--vi-pink-color3)
}
.color-palette-pink .color-palette-item:nth-child(4) {
    background-color: var(--vi-pink-color4)
}
.color-palette-pink .color-palette-item:nth-child(5) {
    background-color: var(--vi-pink-color5)
}

.color-palette-yellow .color-palette-item:nth-child(1) {
    background-color: var(--vi-yellow-color1)
}
.color-palette-yellow .color-palette-item:nth-child(2) {
    background-color: var(--vi-yellow-color2)
}
.color-palette-yellow .color-palette-item:nth-child(3) {
    background-color: var(--vi-yellow-color3)
}
.color-palette-yellow .color-palette-item:nth-child(4) {
    background-color: var(--vi-yellow-color4)
}
.color-palette-yellow .color-palette-item:nth-child(5) {
    background-color: var(--vi-yellow-color5)
}

.color-palette-blue .color-palette-item:nth-child(1) {
    background-color: var(--vi-blue-color1)
}
.color-palette-blue .color-palette-item:nth-child(2) {
    background-color: var(--vi-blue-color2)
}
.color-palette-blue .color-palette-item:nth-child(3) {
    background-color: var(--vi-blue-color3)
}
.color-palette-blue .color-palette-item:nth-child(4) {
    background-color: var(--vi-blue-color4)
}
.color-palette-blue .color-palette-item:nth-child(5) {
    background-color: var(--vi-blue-color5)
}

.color-palette-green .color-palette-item:nth-child(1) {
    background-color: var(--vi-green-color1)
}
.color-palette-green .color-palette-item:nth-child(2) {
    background-color: var(--vi-green-color2)
}
.color-palette-green .color-palette-item:nth-child(3) {
    background-color: var(--vi-green-color3)
}
.color-palette-green .color-palette-item:nth-child(4) {
    background-color: var(--vi-green-color4)
}
.color-palette-green .color-palette-item:nth-child(5) {
    background-color: var(--vi-green-color5)
}

.color-palette-black .color-palette-item:nth-child(1) {
    background-color: var(--vi-font-color)
}
.color-palette-black .color-palette-item:nth-child(2) {
    background-color: var(--vi-link-color)
}
.color-palette-black .color-palette-item:nth-child(3) {
    background-color: var(--vi-icon-color)
}
.color-palette-black .color-palette-item:nth-child(4) {
    background-color: var(--vi-background-color-deep)
}
.color-palette-black .color-palette-item:nth-child(5) {
    background-color: var(--vi-background-color)
}

.color-palette-dark .color-palette-item:nth-child(1) {
    background-color: var(--vi-dark-color1)
}
.color-palette-dark .color-palette-item:nth-child(2) {
    background-color: var(--vi-dark-color2)
}
.color-palette-dark .color-palette-item:nth-child(3) {
    background-color: var(--vi-dark-color3)
}
.color-palette-dark .color-palette-item:nth-child(4) {
    background-color: var(--vi-dark-color4)
}

.color-palette-golden .color-palette-item:nth-child(1) {
    background-color: var(--vi-golden-color1)
}
.color-palette-golden .color-palette-item:nth-child(2) {
    background-color: var(--vi-golden-color2)
}
</style>