import { ref, computed, onMounted, onUpdated } from 'vue'

import type { SetupContext } from 'vue'

import { VirtualScrollProps } from '@/types/scroll-types'
import scrollBarState from './scroll-bar-state'

export default function (props: VirtualScrollProps, ctx: SetupContext) {
  // item list相关数据
  const useDatas = computed(packageArray)
  // 渲染开始下标
  const beginIndex = ref(0)
  // 渲染结束下标
  const endIndex = ref(0)
  // 当前的滚动高度
  const nowHeight = ref(0)
  // item的高度
  const itemHeight = ref(0)
  // scroll总高度
  const totalHeight = computed((): number => {
    return props.datas!.length * itemHeight.value
  })

  // 获取到的scroll容器的高度
  const contentHeight = ref(0)
  // 容器节点
  const content = ref()
  // 工具函数
  /**
   * 如果数组封装
   * @returns 封装好后的数组
   */
  function packageArray (): any {
    let currentHeight = 0
    const newArray: any[] = []
    for (const data of props.datas!) {
      newArray.push({
        value: data,
        scrollTop: currentHeight,
        itemHeight: itemHeight.value
      })
      currentHeight += itemHeight.value
    }
    return newArray
  }

  function getItemHeight () {
    // 获取xx px数据
    const height = window.getComputedStyle(content.value).getPropertyValue('--vi-scroll-item-height')
    if (/px$/.test(height)) {
      itemHeight.value = Number(height.slice(0, -2))
    }
    // console.log(itemHeight.value)
  }

  /**
   * 获取容器高度
   */
  function getContentHeight () {
    const contentStyle = window.getComputedStyle(content.value)
    const maxHeight = contentStyle.getPropertyValue('max-height')
    // max-height层级更高
    if (/px$/.test(maxHeight)) {
      contentHeight.value = Number(maxHeight.slice(0, -2))
    } else {
      const height = contentStyle.getPropertyValue('height')
      if (/px$/.test(height)) contentHeight.value = Number(height.slice(0, -2))
    }
    // console.log(contentHeight.value)
  }

  // 以下是methods
  function scrollTo (x: number, y: number) {
    (content.value as HTMLElement).scrollTo(x, y)
  }

  function lookScroll (e: Event) {
    // 计算到当前应该渲染的节点高度，重新渲染结点
    renderScrollNode()
    // console.log(scrollTop, nowHeight.value, totalHeight.value, begin, end)
    ctx.emit('scroll', e)
  }

  function handleTouchStart (e: Event) {
    e.stopPropagation()
  }

  /**
   * 计算渲染节点
   */
  function renderScrollNode () {
    const { scrollTop } = content.value
    const begin = Math.floor(scrollTop / itemHeight.value)
    const end = Math.ceil((scrollTop + contentHeight.value) / itemHeight.value)
    // 控制节点更新
    beginIndex.value = begin
    endIndex.value = end
    nowHeight.value = useDatas.value[begin]?.scrollTop
  }

  onMounted(() => {
    getItemHeight()
    getContentHeight()
    // 计算第一次结尾高度
    const end = Math.ceil(contentHeight.value / itemHeight.value)
    endIndex.value = end < useDatas.value.length ? end : useDatas.value.length
    // console.log(itemHeight.value, contentHeight.value, endIndex.value)
  })

  onUpdated(() => {
    getContentHeight()
    // 重新渲染节点
    renderScrollNode()
  })

  const scrollBar = scrollBarState(content, props)

  return {
    useDatas,
    scrollTo,
    lookScroll,
    handleTouchStart,
    nowHeight,
    totalHeight,
    beginIndex,
    endIndex,
    content,
    itemHeight,
    ...scrollBar
  }
}
