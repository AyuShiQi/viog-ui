<template>
  <table class="vi-table-editor">
    <thead class="vi-table-editor__header">
      <tr class="vi-table-editor__header_view">
        <th>A</th>
        <th>B</th>
      </tr>
    </thead>
    <tbody class="vi-table-editor__body">
      <tr>
        <td>A</td>
        <td>B</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/table-editor'
// 组件引用components
import tableEditorState from './hooks/table-editor-state'

export default defineComponent({
  name: 'ViTableEditor',
  props,
  setup (props: any, ctx: SetupContext) {
    const tableEditor = tableEditorState()

    return tableEditor
  }
})
</script>

<style lang="less">
@import './css/table-editor.less';
</style>
