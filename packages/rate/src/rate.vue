<template>
  <div class="vi-rate"
  :class="[
    `vi-rate-type-${type}`
  ]">
    <div class="vi-rate-zero" @mousemove="changePick(-1)"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/rate'
// 组件引用components
import rateState from './hooks/rate-state'

export default defineComponent({
  name: 'ViRate',
  props,
  setup (props: any, ctx: SetupContext) {
    const rate = rateState(props, ctx)

    return rate
  }
})
</script>

<style lang="less">
@import './css/rate.less';
</style>
