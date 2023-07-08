<template>
  <div class="vi-steps-item">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/steps-item'
// 组件引用components
import stepsItemState from './hooks/steps-item-state'

export default defineComponent({
  name: 'ViStepsItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const stepsItem = stepsItemState()

    return stepsItem
  }
})
</script>

<style lang="less">
@import './css/steps-item.less';
</style>
