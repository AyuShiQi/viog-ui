<template>
  <div class="vi-virtual-scroll vi-scroll"
  :class="[
  `scroll-${color}`,{
    'is-hidden': hidden,
    'vi-scroll-overlay': overlay,
    'vi-scroll-start-scroll': beginScroll,
    'vi-scroll-mouse-in': mousein
  }]"
  @mouseenter="handleContentMouseenter"
  @mouseleave="handleContentMouseleave">
    <div class="vi-scroll-bar-vertical"
    @mousedown="handleMousedown($event, 0)"
    :style="{
      height: `${barHeight}px`,
      transform: `translateY(${barTop}px)`
    }"></div>
    <div class="vi-scroll-bar-horizontal"
    @mousedown="handleMousedown($event, 1)"
    :style="{
      width: `${barWidth}px`,
      transform: `translateX(${barLeft}px)`
    }"></div>
    <div class="vi-scroll-view-content" ref="content" @scroll="lookScroll" @touchstart="handleTouchStart">
      <div class="list-brace" :style="{
        height: `${totalHeight}px`
      }"></div>
      <div class="list"
      :style="{
        transform: `translateY(${nowHeight}px)`
      }">
      <template v-for="data in useDatas.slice(beginIndex,endIndex + 1)" :key="data.scrollTop">
        <slot :data="data.value"></slot>
      </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SetupContext, defineComponent } from 'vue'

import props from './props/virtual-scroll'

import { VirtualScrollProps } from '@/types/scroll-types'

import { virtualScrollState } from './hooks'

export default defineComponent({
  name: 'ViVirtualScroll',
  props,
  setup (props: VirtualScrollProps, ctx: SetupContext) {
    const mainVirtualScroll = virtualScrollState(props, ctx)

    return {
      ...mainVirtualScroll
    }
  }
})
</script>

<style lang="less">
  @import './css/virtual-scroll.less';
</style>
