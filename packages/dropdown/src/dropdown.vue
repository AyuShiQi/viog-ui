<template>
    <span class="vi-dropdown" ref="openDOM"  @mouseover="mouseOpen" @mouseout="mouseClose">
      <div class="vi-dropdown-nav" ref="boxPositionDOM" @click="changeOpen">
        <slot :open="open"></slot>
      </div>
      <div
      class="vi-dropdown-content"
      :class="[
        `vi-dropdown-content-${direction}`
      ]"
      ref="dropdown">
        <transition :name="`vi-fade-in-out-${direction}`">
          <div
          class="vi-dropdown-list"
          :style="{
            top: `${listTop}px`,
            left: `${listLeft}px`
          }"
          v-show="open">
            <slot name="content"></slot>
          </div>
        </transition>
      </div>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props'

import dropdownState from './hooks/dropdown-state'

export default defineComponent({
  name: 'ViDropdown',
  props,
  setup (props: any) {
    const dropdown = dropdownState(props)

    return dropdown
  }
})
</script>

<style lang="less">
@import './css/dropdown.less';
</style>
