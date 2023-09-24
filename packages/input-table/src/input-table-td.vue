<template>
  <td class="vi-input-table__td" @click="handleClick">
    <div
    contenteditable
    v-if="editShow"
    ref="inputDOM"
    type="text"
    @blur="handleBlur"
    @input="handleInput"
    v-text="viewValue"
    class="vi-input-table__td__input"></div>
    <div v-else
    class="vi-input-table__td__text">
      {{ value }}
    </div>
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
    const tableTd = tableTdState(props, ctx)

    return tableTd
  }
})
</script>

<style lang="less">
@import './css/input-table-td.less';
</style>
