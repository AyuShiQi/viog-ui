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
    <div v-if="lazy!==null&&wait!=='none'" class="lazy-loading">
      <ViLoading :type="wait" color="grey" size="35px"></ViLoading>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, ComponentInternalInstance } from 'vue'

import { loading } from '../../loading'

import { DOMType } from '@/types/vue-types'

export default defineComponent({
  name: 'ViScroll',
  components: {
    ViLoading: loading
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
    },
    smooth: {
      type: Boolean,
      default: false
    },
    wait: {
      type: String,
      default: 'none'
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
      let lock = true
      let lazyHeight = 0

      if (this.lazy !== null && this.wait !== 'none') {
        lazyHeight = 35
      }

      (this.$refs.content as DOMType).addEventListener('scroll', (e: any) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target

        if (lock && scrollTop + clientHeight >= scrollHeight - lazyHeight) {
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
  @import './css/content.less';
</style>
