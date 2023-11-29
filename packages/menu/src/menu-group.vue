<template>
  <collapseLi
  v-if="scalable"
  ref="collapse"
  class="vi-menu-group"
  :needChange="option ? toChoose : () => true"
  :modelValue="isChoose"
  :class="{
    'be-choose': option ? isChoose : false
  }"
  :title="title">
    <template v-slot:title>
      <slot name="title">{{ title }}</slot>
    </template>
    <slot></slot>
  </collapseLi>
  <li
  v-else
  class="vi-menu-group">
    <div class="vi-menu-group__title">
      <slot name="title">{{ title }}</slot>
    </div>
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
    const menuGroup = menuGroupState(props)
    return {
      ...menuGroup
    }
  }
})
</script>

<style lang="less">
@import './css/menu-group.less';
</style>
