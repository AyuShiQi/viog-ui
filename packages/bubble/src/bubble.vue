<template>
    <div
    class="vi-bubble vi-bubble_down"
    :class="[
      `vi-bubble-direction-${direction}`,
      {
        'vi-bubble-mode-dark': dark
      }
    ]"
    @mouseover="handleMouseover" @mouseleave="handleMouseleave">
        <slot></slot>
        <div class="vi-bubble__content">
          <transition name="vi-fade-in-out-normal">
            <div class="vi-bubble__view" v-if="open">
              <div class="vi-bubble__title" v-if="title !== ''">{{ title }}</div>
              <div class="vi-bubble__text">
                <slot name="content"></slot>
              </div>
            </div>
          </transition>
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
    const bubble = bubbleState(props, ctx)

    return bubble
  }
})
</script>

<style lang="less">
@import './css/bubble.less';
</style>
