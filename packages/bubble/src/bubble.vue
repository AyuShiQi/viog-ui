<template>
    <div class="vi-bubble vi-bubble_down">
        <slot></slot>
        <div class="vi-bubble__content">
            <div class="vi-bubble__view"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import bubbleState from './hooks/bubble-state'

import props from './props'

export default defineComponent({
  name: 'ViBubble',
  props,
  setup (props: any, ctx: SetupContext) {
    const bubble = bubbleState()

    return bubble
  }
})
</script>

<style lang="less">
@import './css/bubble.less';
</style>
