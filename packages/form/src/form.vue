<template>
  <div class="vi-form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

import props from './props/form'

export default defineComponent({
  name: 'ViForm',
  props,
  setup (props: any) {
    provide('labelWidth', props.labelWidth)
  }
})
</script>

<style lang="less">
  @import './css/form.less';
</style>
