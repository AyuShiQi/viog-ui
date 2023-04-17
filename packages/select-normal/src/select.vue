<template>
  <span
  class="vi-select"
  :class="[
    `is-${size}`,
    `is-${type}`,
    {
      'is-dark': dark,
      'be-open': open,
      'is-disabled': disabled
    }
  ]"
  ref="select">
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props/select'

import openState from '@/hooks/open-state'

export default defineComponent({
  name: 'ViSelectn',
  props,
  setup (props: any, ctx: SetupContext) {
    const open = openState()

    return {
      ...open
    }
  }
})
</script>

<style lang="less">
</style>
