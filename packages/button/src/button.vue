<template>
  <button class="vi-button" type="button" :disabled="disabled"
  :class="
  [`vi-button--${color}`,
  `vi-button-type-${type}`,
  `vi-button-radius-${radius}`,
  `vi-button-size-${size}`,
  {
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
