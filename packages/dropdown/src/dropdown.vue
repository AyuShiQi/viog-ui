<template>
    <span class="vi-dropdown" ref="openDOM" @click="changeOpen" @mouseover="mouseOpen" @mouseout="mouseClose">
      <div class="vi-dropdown-nav" ref="boxPositionDOM">
        <slot :open="open"></slot>
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

    // 针对hover的方法
    function mouseClose () {
      if (props.trigger !== 'hover') return
      open.toClose({
        afterCb: boxPosition.toChangeViewPosition
      })
    }

    function mouseOpen () {
      if (props.trigger !== 'hover') return
      open.toOpen({
        afterCb: boxPosition.recalcSize
      })
    }

    // 针对click的方法
    function changeOpen () {
      if (props.trigger !== 'click') return
      // 当此次操作时打开时，仅做重新计算处理
      if (!open.open.value) {
        open.toSelect({
          preCb: () => props.beforeopen,
          afterCb: boxPosition.recalcSize
        })
      } else {
        open.toSelect({
          preCb: () => props.beforeopen,
          afterCb: boxPosition.toChangeViewPosition
        })
      }
    }

    function toopen () {
      // 当此次操作时打开时，仅做重新计算处理
      open.toOpen({
        afterCb: boxPosition.recalcSize
      })
    }

    function toclose () {
      open.toClose({
        afterCb: boxPosition.toChangeViewPosition
      })
    }

    return {
      ...open,
      ...boxPosition,
      changeOpen,
      mouseOpen,
      mouseClose,
      toopen,
      toclose
    }
  }
})
</script>

<style lang="less">
@import './css/dropdown.less';
</style>
