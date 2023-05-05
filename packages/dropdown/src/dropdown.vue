<template>
    <span class="vi-dropdown" ref="select">
      <div class="vi-dropdown-nav" @click="toSelect">
        <slot></slot>
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

    return {
      ...open,
      ...boxPosition
    }
  }
})
</script>

<style lang="less">
@import './css/dropdown.less';
</style>
