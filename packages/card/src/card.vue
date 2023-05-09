<template>
  <div
  class="vi-card"
  :class="[
    `is-${type}`
  ]">
    <slot v-if="finish"></slot>
    <slot name="default" v-else></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViCard',
  props,
  setup (props: any, ctx: SetupContext) {
    const a = 1
  }
})
</script>

<style lang="less">
@import './css/card.less';
</style>
