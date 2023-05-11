<template>
  <collapseLi
  v-if="scalable"
  class="vi-menu-group"
  :title="title">
    <slot></slot>
  </collapseLi>
  <li
  v-else
  class="vi-menu-group">
    <div class="vi-menu-group__title">{{ title }}</div>
    <div class="vi-menu-group__content">
      <slot></slot>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/menu-group'

import { collapseLi } from '../../collapse'

import menuGroupState from './hooks/menu-group-state'

export default defineComponent({
  name: 'ViMenuGroup',
  props,
  components: {
    collapseLi
  },
  setup (props: any, ctx: SetupContext) {
    menuGroupState()
  }
})
</script>

<style lang="less">
@import './css/menu-group.less';
</style>
