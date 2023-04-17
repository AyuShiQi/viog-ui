<template>
  <span
  class="vi-tag"
  :class="[
    `vi-tag--${color}`,
    `is-${size}`
  ]">
    <span>标签内容</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViTag',
  props,
  setup (props: any, ctx: SetupContext) {
    console.log('ok')
  }
})
</script>

<style lang="less">
@import './css/tag.less';
</style>
