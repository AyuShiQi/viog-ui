<template>
  <dropdown class="vi-nav-item-group">
    <template v-slot:default>
      <span class="vi-nav-item-group__title">{{ title }}</span>
      <svg
      class="vi-nav-arrow"
      viewBox="0 0 40 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
      </svg>
    </template>
    <template v-slot:content>
      <slot></slot>
    </template>
  </dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/nav-item-group'
// 组件引用components
import { dropdown } from '../../dropdown'

// import _State from './hooks/_-state'

export default defineComponent({
  name: 'ViNavItemGroup',
  props,
  components: { dropdown },
  setup (props: any, ctx: SetupContext) {
    // const _ = _State()
    console.log('item-vue')
  }
})
</script>

<style lang="less">
@import './css/nav-item-group.less';
</style>
