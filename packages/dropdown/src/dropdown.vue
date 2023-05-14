<template>
    <span class="vi-dropdown" ref="openDOM" @click="changeOpen" @mouseover="mouseOpen" @mouseout="mouseClose">
      <div class="vi-dropdown-nav" ref="boxPositionDOM">
        <slot :open="open">dropdown</slot>
      </div>
      <div
      class="vi-dropdown-content"
      :class="[
        `vi-dropdown-content-${direction}`,
        `vi-dropdown-content-else-${elseDirection}`
      ]"
      ref="dropdown">
        <transition :name="`vi-fade-in-out-${direction}`">
          <div class="vi-dropdown-list" v-show="open">
            <slot name="content"></slot>
          </div>
        </transition>
      </div>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props'

import openState from '@/hooks/open-state'
import boxPositionState from '@/hooks/box-position-state'

export default defineComponent({
  name: 'ViDropdown',
  props,
  setup (props: any) {
    const open = openState()
    const boxPosition = boxPositionState()

    function mouseClose () {
      if (props.trigger !== 'hover') return
      open.toClose(boxPosition.toChangeViewPosition)
    }

    function mouseOpen () {
      if (props.trigger !== 'hover') return
      open.toOpen(boxPosition.recalcSize)
    }

    function changeOpen () {
      if (props.trigger !== 'click') return
      // 当此次操作时打开时，仅做重新计算处理
      if (!open.open.value) open.toSelect(boxPosition.recalcSize)
      else open.toSelect(boxPosition.toChangeViewPosition)
    }

    return {
      ...open,
      ...boxPosition,
      changeOpen,
      mouseOpen,
      mouseClose
    }
  }
})
</script>

<style lang="less">
@import './css/dropdown.less';
</style>
