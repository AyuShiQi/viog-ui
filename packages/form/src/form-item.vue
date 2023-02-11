<template>
  <div
  class="vi-form-item"
  :class="[
    `is-${type}`,
    `is-${size}`,
    `align-${align}`,
    {
      'is-dark': dark
    }
  ]">
    <div
    class="vi-form-label"
    :style="{
      width: labelWidth
    }">
      {{label}}
    </div>
    <div class="vi-form-input">
      <slot></slot>
      <span class="vi-form-attention">您的输入为空</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

import props from './props/form-item'

export default defineComponent({
  name: 'ViFormItem',
  props,
  setup () {
    const labelWidth = inject('labelWidth', undefined)

    return {
      labelWidth
    }
  }
})
</script>

<style lang="less">
  @import './css/form-item.less';
</style>
