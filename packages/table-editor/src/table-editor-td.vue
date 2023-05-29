<template>
  <span
  class="vi-table-editor-td"
  :class="{
    'vi-table-editor-td-entire': isEntire,
    'vi-table-editor-td-choose': beChoosed
  }"
  @click="handleClick"
  @dblclick="handleDoubleClick">
    <span
    v-show="!edit"
    class="vi-table-editor-td__text">
      {{ inputValue }}
    </span>
    <input
    name="vi-editor-table-value"
    v-show="edit"
    type="text"
    class="vi-table-editor-td__input"
    v-model="inputValue"
    ref="editInput"
    autocomplete="off"/>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/table-editor-td'
// 组件引用components

import tableEditorTdState from './hooks/table-editor-td-state'

export default defineComponent({
  name: 'ViTableEditorTd',
  props,
  setup (props: any, ctx: SetupContext) {
    const tableEditorTd = tableEditorTdState(props, ctx)

    return tableEditorTd
  }
})
</script>

<style lang="less">
@import './css/table-editor-td.less';
</style>
