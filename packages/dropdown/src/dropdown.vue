<template>
    <span class="vi-dropdown" ref="select">
      <div class="vi-dropdown-nav" @click="toOpen" ref="select">
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

import openState from '@/hooks/open-state'
import boxPositionState from '@/hooks/box-position-state'

export default defineComponent({
  name: 'ViDropdown',
  setup () {
    const open = openState()
    const boxPosition = boxPositionState()

    function toOpen () {
      open.toSelect(boxPosition.recalcSize)
    }

    return {
      ...open,
      ...boxPosition,
      toOpen
    }
  }
})
</script>

<style lang="less">
@import './css/dropdown.less';
</style>
