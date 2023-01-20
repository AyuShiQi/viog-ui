<template>
  <div class="vi-scroll" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousewheel="mouseWheel"
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
  name: 'ViScroll',
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
      default: '#fff'
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
  @import './css/content.less';

  .vi-scroll {
    overflow: hidden;
    display: flex;
    background-color: transparent;
    background-color: #fff;
    justify-content: space-between;
  }

  .vi-scroll .scroll-content {
    overflow: auto;
    height: 100%;
    flex: 1;

    &::-webkit-scrollbar {
      width: 10px;
      height: 100%;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #535353;
    }
  }
</style>
