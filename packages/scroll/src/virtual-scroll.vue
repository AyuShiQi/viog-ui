<template>
  <div class="vi-virtual-scroll vi-scroll" @scroll="lookScroll"
  :style="{
    width,
    height: `${height}px`
  }"
  :class="[
  `scroll-${color}`,{
    'is-hidden': hidden,
  }]"
  ref="content">
    <div class="list-brace" :style="{
      height: `${totalHeight}px`
    }"></div>
    <div class="list"
    :style="{
      transform: `translateY(${nowHeight}px)`
    }">
    <template v-for="data in datas.slice(beginIndex,endIndex)" :key="data.scrollTop">
      <slot :data="data"></slot>
    </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props/virtual-scroll'

import { VirtualScrollProps } from '@/types/scroll-types'

import { virtualScrollState } from './hooks'

export default defineComponent({
  name: 'ViVirtualScroll',
  props,
  setup (props: VirtualScrollProps) {
    const mainVirtualScroll = virtualScrollState(props)

    return {
      ...mainVirtualScroll
    }
  }
})
</script>

<style lang="less">
  @import './css/virtual-scroll.less';
  @import './css/scroll.less';
</style>
