<template>
  <div class="vi-collapse-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

export default defineComponent({
  name: 'ViCollapseGroup',
  setup (props: any, ctx: SetupContext) {
    console.log('new component')
  }
})
</script>

<style lang="less">
@import './css/_.less';
</style>
