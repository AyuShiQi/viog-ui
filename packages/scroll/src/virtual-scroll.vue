<template>
  <div class="vi-virtual-scroll" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousewheel="mouseWheel"
  :style="{
    width,
    height,
    backgroundColor: background
  }">
    <div class="scroll-content" ref="content">
        <slot></slot>
    </div>
    <ScrollBar :color="color" v-show="isShow" :hidden="hidden"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import ScrollBar from './scroll-bar.vue'

import { DOMType } from '@/types/vue-types'

export default defineComponent({
  name: 'ViVirtualScroll',
  components: {
    ScrollBar
  },
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
      default: 'grey'
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
  @import './css/transition.less';
  @import './css/virtual-scroll.less';
</style>
