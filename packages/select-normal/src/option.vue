<template>
  <div class="vi-option">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

export default defineComponent({
  name: 'ViOption',
  setup (props: any, ctx: SetupContext) {
    console.log(12)
  }
})
</script>

<style lang="less">
@import './css/option.less';
</style>
