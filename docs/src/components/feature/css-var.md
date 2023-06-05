# 其他样式变量
组件库提供了一系列样式变量，用于快速搭建

## 卡片风格
- 卡片默认圆角 --vi-card-radius
``` css
div {
    border-radius: var(--vi-card-radius)
}
```
- 卡片阴影 --vi-card-box-shadow
``` css
div {
    box-shadow: var(--vi-card-box-shadow)
}
```
- 卡片padding --vi-card-padding
``` css
div {
    padding: var(--vi-card-padding)
}
```

### 示例
<vi-card class="card">基础样式</vi-card>

## 其它风格
- round圆角 --vi-round-radius
- 浅色盒子阴影 --vi-box-shadow
- 普通匀速动画 --vi-transition

你可以使用以上变量同一项目样式风格

<style>
    .card {
        display: flex;
        width: 100px;
        height: 100px;
        align-items: center;
        justify-content: center;
    }
</style>