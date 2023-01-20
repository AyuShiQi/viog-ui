<template>
  <div class="vi-scroll" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousewheel="mouseWheel"
  :style="{
    width,
    height,
    backgroundColor: background
  }"
  :class="[
  `scroll-${color}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { DOMType } from '@/types/vue-types'

export default defineComponent({
  name: 'ViScroll',
  props: {
    height: {
      type: String,
      default: '400px'
    },
    width: {
      type: String,
      default: '100%'
    },
    scroll: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'purple'
    },
    background: {
      type: String,
      default: 'transparent'
    }
  },
  setup () {
    const isShow = ref(true)
    const hidden = ref(false)

    function mouseEnter (): void {
      hidden.value = false
    }

    function mouseLeave (): void {
      hidden.value = true
    }

    function mouseWheel (): void {
      console.log('ok')
    }

    return {
      isShow,
      hidden,
      mouseEnter,
      mouseLeave,
      mouseWheel
    }
  }
// mounted ():void {
//   (this.$refs.content as DOMType).addEventListenner('hover', () => {
//   })
// }
})
</script>

<style lang="less">
  @import './css/scroll.less';
  @import './css/transition.less';
  @import './css/content.less';
</style>
