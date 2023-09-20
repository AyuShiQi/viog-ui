<template>
  <div
  ref="triggerBox"
  class="vi-context-menu"
  @mousedown="handleMousedown"
  @contextmenu="handleContextMenu">
    <slot></slot>
  </div>
  <div class="vi-context-menu-view"
  ref="contextMenu"
  v-show="isVisible"
  :style="{
    transform: `translate(${listLeft}px, ${listTop}px)`
  }"
  @contextmenu="handleContextMenu">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import contextMenuState from './hooks/context-menu-state'

export default defineComponent({
  name: 'ViContextMenu',
  props,
  setup (props: any, ctx: SetupContext) {
    const contextMenu = contextMenuState()

    return contextMenu
  }
})
</script>

<style lang="less">
@import './css/context-menu.less';
</style>
