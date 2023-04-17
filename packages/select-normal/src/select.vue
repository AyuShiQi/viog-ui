<template>
  <span
  class="vi-select"
  :class="[
    `is-${size}`,
    `is-${type}`,
    {
      'is-dark': dark,
      'be-open': open,
      'is-disabled': disabled
    }
  ]"
  ref="select">
  <span class="vi-select-input"
    @click="toSelect">
        <span class="vi-select-choose">
        </span>
        <svg
        class="vi-select-arrow"
        viewBox="0 0 40 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
        </svg>
    </span>
    <span class="vi-select-list"></span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/select'

import openState from '@/hooks/open-state'

export default defineComponent({
  name: 'ViSelectN',
  props,
  setup (props: any, ctx: SetupContext) {
    const open = openState()

    return {
      ...open
    }
  }
})
</script>

<style lang="less">
@import './css/select.less';
</style>
