<template>
  <div class="vi-rate-item"
  @mousemove="handleMousemove"
  @click="hanldeClick">
    <slot>
      <svg class="vi-rate-item__svg" viewBox="0 0 20 20">
        <linearGradient :id="randomId" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:var(--vi-rate-active-color); stop-opacity:1"/>
          <stop :offset="`${endColor}%`" style="stop-color:var(--vi-rate-active-color); stop-opacity:1"/>
          <stop :offset="`${endColor}%`" style="stop-color:var(--vi-rate-default-color); stop-opacity:1"/>
          <stop offset="100%" style="stop-color:var(--vi-rate-default-color); stop-opacity:1"/>
        </linearGradient>
        <path
        :style="{
          fill: randomUrl
        }"/>
      </svg>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/rate-item'
// 组件引用components
import rateItemState from './hooks/rate-item-state'

export default defineComponent({
  name: 'ViRateItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const rateItem = rateItemState()

    return rateItem
  }
})
</script>

<style lang="less">
@import './css/rate-item.less';
</style>
