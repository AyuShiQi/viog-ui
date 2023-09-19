<template>
  <div
  class="vi-flex"
  ref="flexBox"
  :style="{
    width: `${width}px`,
    height: `${height}px`
  }">
    <slot></slot>
    <!-- 纵向拖拽仪 -->
    <div
    class="vi-flex-drag-vertical vi-flex-drag"
    @mousedown="handleVerticalMousedown"
    :class="[
      `vi-flex-drag-${vertical}`,
      {
        'vi-flex-drag_active': isVertical
      }
    ]"></div>
    <!-- 横向拖拽仪 -->
    <div class="vi-flex-drag-horizontal vi-flex-drag"
    @mousedown="handleHorizontalMousedown"
    :class="[
      `vi-flex-drag-${horizontal}`,
      {
        'vi-flex-drag_active': isHorizontal
      }
    ]"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import flexState from './hooks/flex-state'

export default defineComponent({
  name: 'ViFlex',
  props,
  setup (props: any, ctx: SetupContext) {
    const flex = flexState(props)

    return flex
  }
})
</script>

<style lang="less">
@import './css/flex.less';
</style>
