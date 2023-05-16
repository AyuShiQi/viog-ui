<template>
  <ul class="vi-breadcrumb" ref="breadcrumb">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/breadcrumb'
// 组件引用components
import breadcrumbState from './hooks/breadcrumb-state'

export default defineComponent({
  name: 'ViBreadcrumb',
  props,
  setup (props: any, ctx: SetupContext) {
    const breadcrumb = breadcrumbState(props, ctx)

    return breadcrumb
  }
})
</script>

<style lang="less">
@import './css/breadcrumb.less';
</style>
