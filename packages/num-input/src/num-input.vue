<template>
  <div class="vi-num-input"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import numInputState from './hooks/num-input-state'

export default defineComponent({
  name: 'ViNumInput',
  setup (props: any, ctx: SetupContext) {
    const numInput = numInputState()

    return numInput
  }
})
</script>

<style lang="less">
@import './css/num-input.less';
</style>
