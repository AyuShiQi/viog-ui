<template>
  <span
  class="vi-tag"
  :class="[
    `vi-tag-color-${color}`,
    `vi-tag-size-${size}`,
    {
      'vi-tag-max': max,
      'vi-tag-mutate': mutate
    }
  ]">
    <span>
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViTag',
  props
})
</script>

<style lang="less">
@import './css/tag.less';
</style>
