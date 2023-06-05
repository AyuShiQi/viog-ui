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
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

import navState from './hooks/nav-state'

export default defineComponent({
  name: 'ViNav',
  props,
  emits: ['change'] as string[],
  setup (props: any, ctx: SetupContext) {
    const nav = navState(props, ctx)

    return nav
  }
})
</script>

<style lang="less">
@import './css/nav.less';
</style>
