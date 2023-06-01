<template>
  <ul
    class="vi-table-editor-option-list">
    <li>删除</li>
    <li>复制</li>
    <li>粘贴</li>
    <vi-divider></vi-divider>
    <li>在xx插入一行</li>
    <li>在xx插入一行</li>
    <vi-divider></vi-divider>
    <li>升序</li>
    <li>降序</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import tableEditorOptionListState from './hooks/table-editor-option-list-state'

export default defineComponent({
  name: 'ViTableEditorOptionList',
  setup (props: any, ctx: SetupContext) {
    const tableEditorOptionList = tableEditorOptionListState()

    return tableEditorOptionList
  }
})
</script>

<style lang="less">
@import './css/table-editor-option-list.less';
</style>
