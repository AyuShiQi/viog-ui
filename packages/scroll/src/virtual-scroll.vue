<template>
  <div class="vi-virtual-scroll vi-scroll" @scroll="lookScroll"
  :style="{
    width,
    height: `${height}px`
  }"
  :class="[
  `scroll-${color}`,{
    'is-hidden': hidden,
  }]"
  ref="content">
    <div class="list-brace" :style="{
      height: `${totalHeight}px`
    }"></div>
    <div class="list"
    :style="{
      transform: `translateY(${nowHeight}px)`
    }">
    <template v-for="data in datas.slice(beginIndex,endIndex)" :key="data.scrollTop">
      <slot :data="data"></slot>
    </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, ComponentInternalInstance, shallowReactive } from 'vue'

import { VirtualScrollProps } from '@/types/scroll-types'

import { DOMType } from '@/types/vue-types'

export default defineComponent({
  name: 'ViVirtualScroll',
  props: {
    height: {
      type: Number,
      default: 400
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
    datas: {
      type: Array,
      defualt: []
    },
    itemHeight: {
      type: Number,
      default: 0
    }
  },
  setup (props: VirtualScrollProps) {
    const restItem = 2
    const datas = shallowReactive(props.datas as any[])
    const totalHeight = datas.length * props.itemHeight
    const beginIndex = ref(0)
    const endIndex = ref(0)

    const { proxy } = (getCurrentInstance() as ComponentInternalInstance)
    const nowHeight = ref(0)

    function scrollTo (x: number, y: number) {
      (proxy?.$refs.content as DOMType).scrollTo(x, y)
    }

    function lookScroll (e: any) {
      // 计算到当前应该渲染的节点高度，重新渲染结点
      const { scrollTop } = e.target
      const begin = Math.floor(scrollTop / props.itemHeight)
      const end = Math.ceil((scrollTop + props.height) / props.itemHeight)

      if (!(begin === beginIndex.value)) {
        beginIndex.value = begin
        endIndex.value = end < datas.length - restItem ? end + restItem : end
        nowHeight.value = datas[begin].scrollTop
      }
    }

    (function computeLenAndTop () {
      let currentHeight = 0
      for (const data of datas) {
        data.scrollTop = currentHeight
        data.itemHeight = props.itemHeight
        currentHeight += props.itemHeight
      }

      const end = Math.ceil(props.height / props.itemHeight + restItem)
      endIndex.value = end < datas.length ? end : datas.length - 1
    })()

    return {
      scrollTo,
      lookScroll,
      nowHeight,
      totalHeight,
      beginIndex,
      endIndex
    }
  }
})
</script>

<style lang="less">
  @import './css/virtual-scroll.less';
  @import './css/scroll.less';
</style>
