<template>
  <ul
  class="vi-table-editor-option-list"
  :style="{
    top: listTop + 'px',
    left: listLeft + 'px'
  }">
    <li @click="toDelete">删除</li>
    <vi-divider></vi-divider>
    <li @click="toCut">剪切</li>
    <li @click="toCopy">复制</li>
    <li @click="toPaste">粘贴</li>
    <vi-divider></vi-divider>
    <li
    :class="[
      {
        'vi-table-editor-option-list__li_ban': !showLine
      }
    ]"
    @click="toInsert(0)">
      在{{ mode === 'col' ? '左侧' : '上方' }}插入一行
    </li>
    <li
    :class="[
      {
        'vi-table-editor-option-list__li_ban': !showLine
      }
    ]"
    @click="toInsert(1)">
      在{{ mode === 'col' ? '右侧' : '下方' }}插入一行
    </li>
    <vi-divider></vi-divider>
    <li
    :class="[
      {
        'vi-table-editor-option-list__li_ban': !showCol
      }
    ]"
    @click="toSort(0)">升序</li>
    <li
    :class="[
      {
        'vi-table-editor-option-list__li_ban': !showCol
      }
    ]"
    @click="toSort(1)">降序</li>
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
