<template>
  <div class="vi-scroll"
  :class="[
  `scroll-${color}`,
  {
    'is-hidden': hidden,
    'is-smooth': smooth,
    'vi-scroll-overlay': overlay,
    'vi-scroll-start-scroll': beginScroll
  }]">
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
      <div class="vi-scroll-view-content" ref="content">
        <slot></slot>
      </div>
    <div v-if="lazy!==null&&wait!=='none'" v-show="!finish" class="lazy-loading">
      <div class="loading-animation">
        <ViLoading :type="wait" color="grey" size="35px"></ViLoading>
      </div>
      <span class="text">{{waitText}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import props from './props/scroll'

import { loading } from '../../loading'

import { ScrollProps } from '@/types/scroll-types'

import scrollState from './hooks/scroll-state'

export default defineComponent({
  name: 'ViScroll',
  components: {
    ViLoading: loading
  },
  props,
  setup (props: ScrollProps) {
    const scroll = scrollState(props)

    return scroll
  }
})
</script>

<style lang="less">
  @import './css/scroll.less';
</style>
