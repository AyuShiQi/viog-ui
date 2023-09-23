<template>
  <vi-scroll class="vi-input-table">
    <table>
      <tr class="vi-input-table__tr">
        <slot>
        </slot>
      </tr>
      <tr class="vi-input-table__tr" v-for="(line, i) of viewValue" :key="i">
        <inputTd class="vi-input-table__td" v-for="(item, j) of line" :key="`${i}+${j}`" :value="item"/>
      </tr>
    </table>
  </vi-scroll>
</template>

<script lang="ts">
import inputTd from './input-table-td.vue'
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import inputTableState from './hooks/input-table-state'

export default defineComponent({
  name: 'ViInputTable',
  props,
  components: {
    inputTd
  },
  setup (props: any, ctx: SetupContext) {
    const inputTable = inputTableState(props, ctx)

    return inputTable
  }
})
</script>

<style lang="less">
@import './css/input-table.less';
</style>
