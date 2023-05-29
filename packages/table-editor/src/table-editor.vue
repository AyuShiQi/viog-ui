<template>
  <scroll class="vi-table-editor">
    <div class="vi-table-editor__view" ref="table">
      <div class="vi-table-editor__fixed-header"
      :style="{
        top: `${tableTop}px`,
        left: `${tableLeft}px`
      }"></div>
      <!-- 侧边栏 -->
      <div class="vi-table-editor__side-header"
      :style="{
        left: `${tableLeft}px`
      }">
        <span class="vi-table-editor__side-header__th"
        v-for="(item, i) in sideList"
        :key="item"
        @click="handleSiderClick($event, i)"
        :class="{
          'is-entire': entireTarget[0] === i || chooseTarget[0] === i
        }">
          {{ item }}
        </span>
      </div>
      <!-- 头部 -->
      <div class="vi-table-editor__header"
      :style="{
        top: `${tableTop}px`
      }">
        <span
        class="vi-table-editor__header__th"
        v-for="(item, j) in headerList"
        :key="item"
        @click="handleHeaderClick($event, j)"
        :class="{
          'is-entire': entireTarget[1] === j || chooseTarget[1] === j
        }">
          {{ item }}
        </span>
      </div>
      <!-- body部分 -->
      <div class="vi-table-editor__body">
        <div class="vi-table-editor__body__tr" v-for="(arr, i) in modelValue" :key="arr">
          <tableEditorTd v-for="(item, j) in arr" :key="item" :value="item" :row="Number(i)" :col="j"></tableEditorTd>
        </div>
      </div>
      <!-- 格式框 -->
      <div class="vi-table-editor__pick-box">
        <div class="vi-table-editor__pick-pointer"></div>
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
import tableEditorTd from './table-editor-td.vue'
import { scroll } from '../../scroll'

import tableEditorState from './hooks/table-editor-state'

export default defineComponent({
  name: 'ViTableEditor',
  props,
  components: { scroll, tableEditorTd },
  setup (props: any, ctx: SetupContext) {
    const tableEditor = tableEditorState(props, ctx)

    return tableEditor
  }
})
</script>

<style lang="less">
@import './css/table-editor.less';
</style>
