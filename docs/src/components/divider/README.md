---
sidebarDepth: 1
---

# 分割线 divider

基础分割线


## 使用说明

### 简单引入

<code-show>
<row>
<vi-divider></vi-divider>
</row>
<template v-slot:code>

``` vue
<vi-divider></vi-divider>
```

</template>
</code-show>

### 方向

通过修改属性direction，切换分割线为水平或垂直方向

<code-show>
<row>
<div class="normal-box">
viog
<vi-divider direction="vertical"></vi-divider>
ui
</div>
</row>
<template v-slot:code>

``` vue
<div class="normal-box">
viog
<vi-divider direction="vertical"></vi-divider>
ui
</div>
```

</template>
</code-show>

## Props
| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| direction | 分割线方向 | 'horizontal' \| 'vertical' | 'horizontal' |

<style>
  .normal-box {
    height: 40px;
  }
</style>