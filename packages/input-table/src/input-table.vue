<template>
  <div class="vi-input-table"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import inputTableState from './hooks/input-table-state'

export default defineComponent({
  name: 'ViInputTable',
  setup (props: any, ctx: SetupContext) {
    const inputTable = inputTableState()
  }
})
</script>

<style lang="less">
@import './css/input-table.less';
</style>
