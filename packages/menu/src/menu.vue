<template>
  <ul
  class="vi-menu"
  :class="{
    'has-shadow': shadow
  }">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/menu'

import menuState from './hooks/menu-state'

export default defineComponent({
  name: 'ViMenu',
  emits: ['select', 'update:modelValue'] as string[],
  props,
  setup (props: any, ctx: SetupContext) {
    menuState(props, ctx)
  }
})
</script>

<style lang="less">
@import './css/menu.less';
</style>
