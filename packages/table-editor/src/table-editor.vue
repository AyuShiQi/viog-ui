<template>
  <scroll class="vi-table-editor">
    <div class="vi-table-editor__header">
      <div class="vi-table-editor__header_view">
        <th>A</th>
        <th>B</th>
      </div>
    </div>
    <div class="vi-table-editor__body">
      <div>
        <td>A</td>
        <td>B</td>
      </div>
    </div>
  </scroll>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/table-editor'
// 组件引用components
import { scroll } from '../../scroll'

import tableEditorState from './hooks/table-editor-state'

export default defineComponent({
  name: 'ViTableEditor',
  props,
  components: { scroll },
  setup (props: any, ctx: SetupContext) {
    const tableEditor = tableEditorState()

    return tableEditor
  }
})
</script>

<style lang="less">
@import './css/table-editor.less';
</style>
