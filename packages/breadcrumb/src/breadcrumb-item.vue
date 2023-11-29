<template>
  <li
  class="vi-breadcrumb-item"
  :class="[
    `vi-breadcrumb-item-color-${curColor}`,
    {
      'vi-breadcrumb-item-to': to
    }
  ]"
  @click="handleClick">
    <slot></slot>
  </li>
  <span class="vi-breadcrumb__separator">
    {{ separator }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/breadcrumb-item'
// 组件引用components
import breadcrumbItemState from './hooks/breadcrumb-item-state'

export default defineComponent({
  name: 'ViBreadcrumbItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const breadcrumbItem = breadcrumbItemState(props, ctx)

    return breadcrumbItem
  }
})
</script>

<style lang="less">
@import './css/breadcrumb-item.less';
</style>
