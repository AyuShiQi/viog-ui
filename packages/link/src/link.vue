<template>
  <a
  class="vi-link"
  :href="href"
  :class="[
    `vi-link--${color}`,
    `is-${size}`
  ]">
    <slot></slot>
  </a>
</template>

<script>
import { defineComponent } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViLink',
  props
})
</script>

<style>
  @import './css/link.less';
</style>
