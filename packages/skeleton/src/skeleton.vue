<template>
  <div
  class="vi-skeleton"
  :class="[
    `vi-skeleton_${type}`,
    {
      'is-animate': animate
    }
  ]"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViSkeleton',
  props
})
</script>

<style lang="less">
@import './css/skeleton.less';
</style>
