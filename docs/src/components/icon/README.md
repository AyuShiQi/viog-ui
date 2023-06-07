---
sidebarDepth: 1
---

# 图标 icon

本组件库集合了一套icon图标供以使用

::: tip 说明
本套icon来自iconfont-阿里巴巴矢量图标库，可以免费商用
:::

## 使用说明

### 简单引入

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

这里给出了所有图标的type属性名称 (第一行)

<row>
<card v-for="name in map" :key="name[0]" :title="name[0]" :desc="name[1]">
<vi-icon :type="name[0]"></vi-icon>
</card>
</row>

注意：概率图标在之后的版本中type名会有更改，请注意更新动态

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
<vi-icon class="my-icon-48px"></vi-icon>
<vi-icon type="big"></vi-icon>
<vi-icon></vi-icon>
<vi-icon type="small"></vi-icon>

<style>
  .my-icon-48px {
    font-size: 48px;
  }
</style>
```
</template>
</code-show>

## Props
| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| type | icon类型 | 详见上表 | 'haoyourenzheng' |
| size | icon大小 | 'big' \| 'middle' \| 'small' | 'middle' |

<script setup>
  const map = [
    ['haoyourenzheng','好友认证'],
    ['fenxiang','分享'],
    ['paixu','排序'],
    ['gaishuai','概率'],
    ['huodong','活动'],
    ['jianshao','减少'],
    ['gengduo','更多'],
    ['quanxian','权限'],
    ['duihuan','兑换'],
    ['pinglun','评论'],
    ['faxian','发现'],
    ['lishijilu','历史记录'],
    ['shanchu','删除'],
    ['jihua','计划'],
    ['quan','券'],
    ['qianbao','钱包'],
    ['saoma','扫码'],
    ['shezhi','设置'],
    ['renzheng','认证'],
    ['shouye','首页'],
    ['qushi','趋势'],
    ['shangpin','商品'],
    ['shouji','手机'],
    ['xiazai','下载'],
    ['shanchuhaoyou','删除好友'],
    ['sousuo','搜索'],
    ['xinxi','信息'],
    ['shijian','时间'],
    ['shoucang','收藏'],
    ['shuju','数据'],
    ['tupian','图片'],
    ['xiangji','相机'],
    ['xinyongka','信用卡'],
    ['yingyong','应用'],
    ['shangchuan','上传'],
    ['shipin','视频'],
    ['tianjia','添加'],
    ['dingwei','定位'],
    ['biaoqian','标签'],
    ['bianji','编辑'],
    ['wode','我的'],
    ['dingdan','订单'],
    ['xiaoxi','消息'],
    ['tianjiahaoyou','添加好友'],
    ['yue','余额'],
    ['wenjianjia','文件夹'],
    ['ziliao','资料']
  ]
</script>


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