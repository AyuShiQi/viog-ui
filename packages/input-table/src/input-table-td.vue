<template>
  <td class="vi-input-table__td">
    {{ value }}
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/input-table-td'
// 组件引用components
import tableTdState from './hooks/input-table-td-state'

export default defineComponent({
  name: 'ViInputTableTd',
  props,
  setup (props: any, ctx: SetupContext) {
    const tableTd = tableTdState()

    return tableTd
  }
})
</script>

<style lang="less">
@import './css/input-table-td.less';
</style>
