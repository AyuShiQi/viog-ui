<template>
  <button class="vi-button" type="button" :disabled="disabled"
  :class="
  [`vi-button--${color}`,
  `is-${type}`,
  `is-${radius}`,
  {
    'is-small': small,
    'is-mutate': mutate,
    'is-disabled': disabled
  }]">
    <span>
        <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViButton',
  props
})
</script>

<style lang="less">
  @import './css/button';
</style>
