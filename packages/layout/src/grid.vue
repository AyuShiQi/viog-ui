<template>
  <div
  class="vi-grid"
  :style="{
    width,
    height,
    gridTemplateColumns: `repeat(${row}, 1fr)`,
    gridTemplateRows: `repeat(${col}, 1fr)`,
    gap
  }">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import props from './props/grid.ts'

export default defineComponent({
  name: 'ViGrid',
  props
})
</script>

<style lang="less">
  @import './css/grid.less';
</style>
