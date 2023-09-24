<template>
  <vi-scroll
  :class="[
    `vi-tab-card-group-type-${type}`
  ]"
  class="vi-tab-card-group"
  overlay>
    <div class="vi-tab-card-group__view">
      <slot></slot>
    </div>
  </vi-scroll>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/tab-group'
// 组件引用components
import tabGroupState from './hooks/tab-group-state'

export default defineComponent({
  name: 'ViTabCardGroup',
  props,
  setup (props: any, ctx: SetupContext) {
    const tabGroup = tabGroupState(props, ctx)
    return tabGroup
  }
})
</script>

<style lang="less">
@import './css/tab-group.less';
</style>
