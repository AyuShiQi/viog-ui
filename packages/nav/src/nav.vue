<template>
    <div
    class="vi-nav"
    :class="[
      `is-${direction}`
    ]">
        <div class="vi-nav-list" ref="nav">
            <slot></slot>
        </div>
        <div class="vi-nav-line">
            <div
            class="vi-nav-line-choose"
            :style="{
              [boxUnit]: `${nowWidth}px`,
              [offsetUnit]: `${nowLeft}px`
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
    const nav = navState(ctx, props.direction)
    const boxUnit = props.direction === 'horizontal' ? 'width' : 'height'
    const offsetUnit = props.direction === 'horizontal' ? 'left' : 'top'

    const nowWidth = computed(() => {
      return nav.listLen[props.modelValue]
    })

    const nowLeft = computed(() => {
      return nav.listOffset[props.modelValue]
    })

    return {
      ...nav,
      nowWidth,
      nowLeft,
      boxUnit,
      offsetUnit
    }
  }
})
</script>

<style lang="less">
@import './css/nav.less';
</style>
