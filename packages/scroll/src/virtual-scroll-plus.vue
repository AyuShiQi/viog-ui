<template>
  <div class="vi-virtual-scroll-plus" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousewheel="mouseWheel"
  :style="{
    width,
    height: `${height}px`,
    backgroundColor: background
  }">
    <div class="scroll-content" ref="content">
        <slot></slot>
    </div>
    <ScrollBar :color="color" v-if="hidden" :hidden="!isShow" :clientHeight="height" :totalHeight="900"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import ScrollBar from './scroll-bar.vue'

import { DOMType } from '@/types/vue-types'

export default defineComponent({
  name: 'ViVirtualScrollPlus',
  components: {
    ScrollBar
  },
  props: {
    height: {
      type: Number,
      default: 400
    },
    width: {
      type: String,
      default: '100%'
    },
    hidden: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'grey'
    },
    background: {
      type: String,
      default: '#Fff'
    }
  },
  setup () {
    const isShow = ref(true)

    function mouseEnter (): void {
      isShow.value = true
    }

    function mouseLeave (): void {
      isShow.value = false
    }

    function mouseWheel (): void {
      console.log('ok')
    }

    return {
      isShow,
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
  @import './css/virtual-scroll-plus.less';
</style>
