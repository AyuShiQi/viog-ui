<template>
  <span
  class="vi-col"
  :style="{
    alignItems: align,
    alignCenter: align,
    justifyContent: justify,
    width,
    height,
    gridColumnStart: `span ${row}`,
    gridRowStart: `span ${col}`
  }">
    <slot></slot>
  </span>
</template>

<script>
import { defineComponent } from 'vue'

import props from './props/col'

export default defineComponent({
  name: 'ViCol',
  props
})
</script>

<style lang="less">
  @import './css/col.less';
</style>
