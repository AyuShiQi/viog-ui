<template>
  <div class="vi-rate">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import rateState from './hooks/rate-state'

export default defineComponent({
  name: 'ViRate',
  setup (props: any, ctx: SetupContext) {
    const rate = rateState()
  }
})
</script>

<style lang="less">
@import './css/rate.less';
</style>
