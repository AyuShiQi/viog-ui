<template>
  <th ref="column" class="vi-table-column">
    <slot>
      {{ value }}
    </slot>
  </th>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/table-col'
// 组件引用components
import tabeColumnState from './hooks/table-column-state'

export default defineComponent({
  name: 'ViTableColumn',
  props,
  setup (props: any, ctx: SetupContext) {
    const tabeColumn = tabeColumnState(props)

    return tabeColumn
  }
})
</script>

<style lang="less">
@import './css/table-column.less';
</style>
