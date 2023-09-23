<template>
  <th class="vi-input-table__th">
    <slot></slot>
  </th>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/input-table-col'
// 组件引用components
import inputTableColState from './hooks/input-table-col-state'

export default defineComponent({
  name: 'ViInputTableCol',
  props,
  setup (props: any, ctx: SetupContext) {
    const inputTableCol = inputTableColState()

    return inputTableCol
  }
})
</script>

<style lang="less">
@import './css/input-table-col.less';
</style>
