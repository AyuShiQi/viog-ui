<template>
  <div class="vi-verify-slider" ref="verifySlider">
    <slot>向右滑动进行验证</slot>
    <div class="vi-verify-slider-box"
    @mousedown="handleMousedown"
    @touchstart="handleMousedown"
    :style="{
      transform: `translateX(${boxLeft}px)`
    }">
      <div class="vi-verify-slider-box__line"></div>
      <div class="vi-verify-slider-box__view">
        <slot name="slider">
          <vi-icon></vi-icon>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import verifySliderState from './hooks/verify-slider-state'

export default defineComponent({
  name: 'ViVerifySlider',
  props,
  setup (props: any, ctx: SetupContext) {
    const verifySlider = verifySliderState(props, ctx)

    return verifySlider
  }
})
</script>

<style lang="less">
@import './css/verify-slider.less';
</style>
