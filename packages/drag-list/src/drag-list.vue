<template>
  <div class="vi-drag-list"
  :class="{
    'vi-drag-list_drag': isDrag
  }">
    <vi-drag-list-item v-for="(item, index) of modelValue" :key="item"
    :index="index"
    @updatemask="(updateMaskTop as any)"
    @listdrag="(handleDrag as any)">
      <slot :data="item"></slot>
    </vi-drag-list-item>
    <div class="vi-drag-list__mask"
    :style="{
      display: isDrag ? 'block' : 'none',
      height: `${maskHeight}px`,
      transform: `translateY(${maskTop}px)`
    }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/drag-list'
// 组件引用components
import ViDragListItem from './drag-list-item.vue'
import dragState from './hooks/drag-list-state'

export default defineComponent({
  name: 'ViDragList',
  props,
  components: {
    ViDragListItem
  },
  setup (props: any, ctx: SetupContext) {
    const drag = dragState(props, ctx)

    return drag
  }
})
</script>

<style lang="less">
@import './css/drag-list.less';
</style>
