<template>
  <div class="vi-drag-list-item"
  @mousedown="handleMousedown"
  @mousemove="handleMousemove"
  @mouseup="handleMouseup"
  ref="dragItem"
  :class="{
    'vi-drag-list-item_is-drag': isDrag
  }"
  :style="{
    transform: `translateY(${offset}px)`
  }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/drag-list-item'
// 组件引用components
import dragState from './hooks/drag-list-item-state'

export default defineComponent({
  name: 'ViDragListItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const drag = dragState(props, ctx)
    return drag
  }
})
</script>

<style lang="less">
@import './css/drag-list-item.less';
</style>
