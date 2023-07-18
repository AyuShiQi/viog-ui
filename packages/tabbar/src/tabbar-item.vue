<template>
  <div
  class="vi-tabbar-item"
  :class="[
    {
      'be-choosed': beChoosed
    }
  ]"
  @click="handleClick">
    <div class="vi-tabber-item__icon">
      <slot name="icon"></slot>
    </div>
    <p class="vi-tabber-item__title">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/tabbar-item'
// 组件引用components
import tabbarItemState from './hooks/tabbar-item-state'

export default defineComponent({
  name: 'ViTabbarItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const tabbarItem = tabbarItemState(props)

    return tabbarItem
  }
})
</script>

<style lang="less">
@import './css/tabbar-item.less';
</style>
