<template>
  <div class="vi-scroll"
  :style="{
    width,
    height
  }"
  :class="[
  `scroll-${color}`,{
    'is-hidden': hidden,
    'is-smooth': smooth
  }]"
  ref="content">
    <slot></slot>
    <div v-if="lazy!==null&&wait!=='none'" v-show="!finish" class="lazy-loading">
      <div class="loading-animation">
        <ViLoading :type="wait" color="grey" size="35px"></ViLoading>
      </div>
      <span class="text">{{waitText}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, ComponentInternalInstance } from 'vue'

import props from './props/scroll'

import { loading } from '../../loading'

import { DOMType } from '@/types/vue-types'
import { ScrollProps } from '@/types/scroll-types'

export default defineComponent({
  name: 'ViScroll',
  components: {
    ViLoading: loading
  },
  props,
  setup () {
    const { proxy } = (getCurrentInstance() as ComponentInternalInstance)

    function scrollTo (x: number, y: number) {
      (proxy?.$refs.content as DOMType).scrollTo(x, y)
    }

    return {
      scrollTo
    }
  },
  mounted ():void {
    if (this.lazy != null) {
      let lock = true
      let lazyHeight = 0

      if (this.lazy !== null && this.wait !== 'none') {
        lazyHeight = 35
      }

      (this.$refs.content as DOMType).addEventListener('scroll', (e: any) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target

        if (lock && !this.finish && scrollTop + clientHeight >= scrollHeight - lazyHeight) {
          lock = false
          this.$props.lazy().then(() => {
            lock = true
          }).catch(() => {
            lock = false
          })
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
</style>
