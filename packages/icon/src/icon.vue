<template>
  <span class="vi-icon"
  :class="[
    `vi-icon-${type}`,
    `vi-icon-size-${size}`
  ]"></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViIcon',
  props
})
</script>

<style lang="less">
  @import './css/icon.less';
</style>
