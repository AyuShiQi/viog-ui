<template>
  <div
  class="vi-cascader-item"
  :class="[
    {
      'vi-cascader-item_has-children': hasChildren,
      'vi-cascader-item_picked': picked
    }
  ]">
    <div class="vi-cascader-item__title">
      <slot></slot>
    </div>
    <div class="vi-cascader-item__next-btn">
      <svg viewBox="0 0 20 20">
        <path d="M5 2 L15 10 L5 18"/>
      </svg>
    </div>
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
    const cascaderItem = cascaderItemState(props)
    return cascaderItem
  }
})
</script>

<style lang="less">
@import './css/cascader-item.less';
</style>
