<template>
  <div class="vi-table-editor">
    <!-- 固定头 -->
    <div class="vi-table-editor__fixed-header"></div>
    <!-- 侧边栏 -->
    <div class="vi-table-editor__side-header"
    :style="{
      transform: `translateY(-${tableTop}px)`
    }">
      <span class="vi-table-editor__side-header__th"
      v-for="(item, i) in sideList"
      :key="item"
      @mousedown="handleSiderClick($event, i)"
      @contextmenu="handleOpenContextMenu($event, 'row')"
      :class="{
        'is-entire': entireTarget[0] === i || chooseTarget[0] === i
      }">
        {{ item }}
      </span>
    </div>
    <!-- 头部 -->
    <div class="vi-table-editor__header"
    :style="{
      transform: `translateX(-${tableLeft}px)`
    }">
      <span
      class="vi-table-editor__header__th"
      v-for="(item, j) in headerList"
      :key="item"
      @mousedown="handleHeaderClick($event, j)"
      @contextmenu="handleOpenContextMenu($event, 'col')"
      :class="{
        'is-entire': entireTarget[1] === j || chooseTarget[1] === j
      }">
        {{ item }}
      </span>
    </div>
    <scroll
    class="vi-table-editor__scroll"
    @scroll="scrollListener"
    overlay
    ref="table">
      <div class="vi-table-editor__view" draggable="false">
        <!-- body部分 -->
        <div class="vi-table-editor__body" draggable="false" ref="tableBody">
          <div class="vi-table-editor__body__tr" v-for="(arr, i) in value" :key="arr">
            <tableEditorTd
            v-for="(item, j) in arr"
            :key="`${item}$${i}$${j}`"
            :value="item" :row="Number(i)"
            :col="j"
            @contextmenu="handleOpenContextMenu"></tableEditorTd>
          </div>
        </div>
        <!-- 格式框 -->
        <div
        v-show="needChange"
        class="vi-table-editor__change-box"
        :style="{
          top: changeTop,
          left: changeLeft,
          width: changeWidth,
          height: changeHeight
        }"></div>
        <!-- 选中框 -->
        <div
        v-show="pickBoxShow"
        class="vi-table-editor__pick-box"
        :style="{
          top: pickTop,
          left: pickLeft,
          width: pickWidth,
          height: pickHeight
        }">
          <div class="vi-table-editor__pick-pointer"
          @mousedown="handlePointerMouseDown"
          :style="{
            'pointer-events': needChange ? 'none' : 'auto'
          }"
          ></div>
        </div>
        <!-- 操作列表 -->
        <teleport to='body'>
          <tableEditorOptionList
          v-show="open"
          ref="openDOM">
          </tableEditorOptionList>
        </teleport>
      </div>
    </scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/table-editor'
// 组件引用components
import tableEditorTd from './table-editor-td.vue'
import tableEditorOptionList from './table-editor-option-list.vue'
import { scroll } from '../../scroll'

import tableEditorState from './hooks/table-editor-state'

export default defineComponent({
  name: 'ViTableEditor',
  props,
  components: { scroll, tableEditorTd, tableEditorOptionList },
  setup (props: any, ctx: SetupContext) {
    const tableEditor = tableEditorState(props, ctx)

    return tableEditor
  }
})
</script>

<style lang="less">
@import './css/table-editor.less';
</style>
