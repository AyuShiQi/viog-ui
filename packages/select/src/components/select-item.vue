<template>
  <span
  class="vi-select-item"
  :class="[
    `is-${size}`,
    `is-${type}`
  ]">
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { SetupContext } from 'vue'

// import props from '../src/props'

// import { switchProps } from '@/types/switch-types'

export default defineComponent({
  name: 'ViSelect',
  // props,
  setup (props: any, context: SetupContext) {
    console.log(1)
  }
})
</script>

<style lang="less">
  // @import './css/select.less';
</style>
