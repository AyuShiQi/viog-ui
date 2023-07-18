<template>
  <div class="vi-tabbar">
    <div class="vi-tabbar__view">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import tabbarState from './hooks/tabbar-state'

export default defineComponent({
  name: 'ViTabbar',
  setup (props: any, ctx: SetupContext) {
    const tabbar = tabbarState(props, ctx)
  }
})
</script>

<style lang="less">
@import './css/tabbar.less';
</style>
