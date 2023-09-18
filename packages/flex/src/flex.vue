<template>
  <div class="vi-flex"></div>
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
    const flex = flexState()
  }
})
</script>

<style lang="less">
@import './css/flex.less';
</style>
