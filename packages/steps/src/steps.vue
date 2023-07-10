<template>
  <div class="vi-steps">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/steps'
// 组件引用components
import stepsState from './hooks/steps-state'

export default defineComponent({
  name: 'ViSteps',
  props,
  setup (props: any, ctx: SetupContext) {
    const steps = stepsState(props)

    return steps
  }
})
</script>

<style lang="less">
@import './css/steps.less';
</style>
