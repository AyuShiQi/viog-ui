<template>
  <div
  class="vi-grid"
  :style="{
    width,
    height,
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gridTemplateRows: `repeat(${row}, 1fr)`,
    gap
  }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props/grid'

export default defineComponent({
  name: 'ViGrid',
  props
})
</script>

<style lang="less">
  @import './css/grid.less';
</style>
