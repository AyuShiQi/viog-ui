<template>
  <div class="vi-rate-item"
  @mousemove="handleMousemove"
  :style="{
    'background': `linear-gradient(to right, var(--vi-rate-active-color) 0%, var(--vi-rate-active-color) ${endColor}%, var(--vi-rate-default-color) ${endColor}%)`
  }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/rate-item'
// 组件引用components
import rateItemState from './hooks/rate-item-state'

export default defineComponent({
  name: 'ViRateItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const rateItem = rateItemState()

    return rateItem
  }
})
</script>

<style lang="less">
@import './css/rate-item.less';
</style>
