<template>
  <div class="vi-drag-list">
    <vi-drag-list-item v-for="(item, index) of modelValue" :key="item" :index="index">
      <slot :data="item"></slot>
    </vi-drag-list-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/drag-list'
// 组件引用components
import dragState from './hooks/drag-list-state'

export default defineComponent({
  name: 'ViDragList',
  props,
  setup (props: any, ctx: SetupContext) {
    const drag = dragState()

    return drag
  }
})
</script>

<style lang="less">
@import './css/drag-list.less';
</style>
