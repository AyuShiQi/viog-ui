<template>
  <li
  class="vi-menu-item"
  :class="[
    {
      'be-choose': isChoose
    }
  ]"
  @click="toChoose">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/menu-item'

import menuItemState from './hooks/menu-item'

export default defineComponent({
  name: 'ViMenuItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const menuItem = menuItemState()

    return {
      ...menuItem
    }
  }
})
</script>

<style lang="less">
@import './css/menu-item.less';
</style>
