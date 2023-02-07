<template>
  <div
  class="vi-row"
  :style="{
    alignItems: align,
    alignCenter: align,
    justifyContent: justify,
    flexDirection: direction,
    width,
    height
  }">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViRow',
  props
})
</script>

<style lang="less">
  @import './css/row.less';
</style>
