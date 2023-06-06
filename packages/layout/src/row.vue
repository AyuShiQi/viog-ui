<template>
  <div
  class="vi-row"
  :style="{
    alignItems: align,
    alignContent: align,
    justifyContent: justify,
    flexDirection: direction as any,
    width,
    height,
    gap
  }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
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
