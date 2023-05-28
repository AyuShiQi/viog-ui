<template>
  <scroll class="vi-table-editor">
    <div class="vi-table-editor__view" ref="table">
      <div class="vi-table-editor__fixed-header"
      :style="{
        top: `${tableTop}px`,
        left: `${tableLeft}px`
      }"></div>
      <div class="vi-table-editor__side-header"
      :style="{
        left: `${tableLeft}px`
      }">
        <span class="vi-table-editor__side-header__th"
        v-for="item in sideList" :key="item">
          {{ item }}
        </span>
      </div>
      <div class="vi-table-editor__header"
      :style="{
        top: `${tableTop}px`
      }">
        <span class="vi-table-editor__header__th" v-for="item in headerList" :key="item">{{ item }}</span>
      </div>
      <div class="vi-table-editor__body">
        <div class="vi-table-editor__body__tr" v-for="arr in modelValue" :key="arr">
          <span class="vi-table-editor__body__td" v-for="item in arr" :key="item">{{ item }}</span>
        </div>
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
    const tableEditor = tableEditorState(props, ctx)

    return tableEditor
  }
})
</script>

<style lang="less">
@import './css/table-editor.less';
</style>
