<template>
    <div class="vi-nav">
        <div class="vi-nav-list" ref="nav">
            <slot></slot>
        </div>
        <div class="vi-nav-line">
            <div
            class="vi-nav-line-choose"
            :style="{
              'width': `${nowWidth}px`,
              'left': `${nowLeft}px`
            }"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import navState from './hooks/nav-state'

export default defineComponent({
  name: 'ViNav',
  props,
  setup (props: any, ctx: SetupContext) {
    const nav = navState(ctx)

    const nowWidth = computed(() => {
      return nav.listWidth[props.modelValue]
    })

    const nowLeft = computed(() => {
      return nav.listLeft[props.modelValue]
    })

    return {
      ...nav,
      nowWidth,
      nowLeft
    }
  }
})
</script>

<style lang="less">
@import './css/nav.less';
</style>
