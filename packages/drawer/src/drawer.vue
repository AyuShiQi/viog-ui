<template>
    <div
    class="vi-drawer"
    :class="[
      `the-${direction}`,
      {
        'be-open': modelValue,
        'vi-drawer-teleport': teleport
      }
    ]">
      <div class="vi-drawer-handle" @click="toOpen">
        <svg class="drawer-content" viewBox="0 0 50 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 111.803 C0 104.041 1.80726 96.3855 5.27864 89.4427 L65 0V400L5.27864 310.557C1.80725 303.615 0 295.959 0 288.197V111.803Z"/>
        </svg>
        <svg
        class="vi-drawer-arrow"
        viewBox="0 0 40 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
          <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
        </svg>
      </div>
      <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViDrawer',
  props,
  setup (props: any, ctx: SetupContext) {
    function toOpen () {
      ctx.emit('update:modelValue', !props.modelValue)
    }

    return {
      toOpen
    }
  }
})
</script>

<style lang="less">
@import './css/drawer.less';
</style>
