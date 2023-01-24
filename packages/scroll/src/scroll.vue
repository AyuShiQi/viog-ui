<template>
  <div class="vi-scroll"
  :style="{
    width,
    height
  }"
  :class="[
  `scroll-${color}`,{
    'is-hidden': hidden
  }]"
  ref="content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, ComponentInternalInstance } from 'vue'

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
    color: {
      type: String,
      default: 'grey'
    },
    hidden: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Function,
      default: null
    }
  },
  setup () {
    const { proxy } = (getCurrentInstance() as ComponentInternalInstance)
    const isShow = ref(true)

    function scrollTo (x: number, y: number) {
      (proxy?.$refs.content as DOMType).scrollTo(x, y)
    }

    return {
      isShow,
      scrollTo
    }
  },
  mounted ():void {
    if (this.$props.lazy != null) {
      (this.$refs.content as DOMType).addEventListener('scroll', (e: any) => {
        const { scrollHeight, scrollTop, clientHeight } = e.target

        if (scrollTop + clientHeight === scrollHeight) {
          this.$props.lazy()
        }
      })
    }
  },
  unmounted (): void {
    if (this.$props.lazy != null) (this.$refs.content as DOMType).removeEventListener('scroll')
  }
})
</script>

<style lang="less">
  @import './css/scroll.less';
  @import './css/content.less';
</style>
