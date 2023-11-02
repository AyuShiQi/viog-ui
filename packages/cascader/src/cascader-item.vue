<template>
  <div class="vi-cascader-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/cascader-item'
// 组件引用components
import cascaderItemState from './hooks/cascader-item-state'

export default defineComponent({
  name: 'ViCascaderItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const cascaderItem = cascaderItemState()
    return cascaderItem
  }
})
</script>

<style lang="less">
@import './css/cascader-item.less';
</style>
