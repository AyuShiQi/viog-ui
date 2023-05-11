<template>
    <div
    class="vi-divider"
    :class="[
      `is-${direction}`
    ]"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViDivider',
  props
})
</script>

<style lang="less">
@import './css/divider.less';
</style>
