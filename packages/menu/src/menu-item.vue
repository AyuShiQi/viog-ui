<template>
  <li
  class="vi-menu-item"
  :class="[
    {
      'be-choose': isChoose
    }
  ]"
  @click="toChoose">
    <span class="vi-menu-item__prefix" v-if="prefix">
      <slot name="prefix"></slot>
    </span>
    <span class="vi-menu-item__text">
      <slot></slot>
    </span>
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
