import { ref, reactive, computed, onMounted, onUpdated } from 'vue'

import { VirtualScrollProps } from '@/types/scroll-types'

export default function (props: VirtualScrollProps) {
  // item list相关数据
  const useDatas = reactive(packageArray(props.datas as any[]))
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
    return useDatas.length * itemHeight.value
  })

  // 获取到的scroll容器的高度
  const contentHeight = ref(0)
  // 容器节点
  const content = ref()
  onMounted(() => {
    getItemHeight()
    getContentHeight()
    computeLenAndTop()
    // 计算第一次结尾高度
    const end = Math.ceil(contentHeight.value / itemHeight.value)
    endIndex.value = end < useDatas.length ? end : useDatas.length
  })

  // 工具函数
  // 如果数组里是基本数据类型，需要做进一步的封装
  function packageArray (datas: any): any {
    const newArray: any[] = []
    for (const data of datas) {
      newArray.push({
        value: data
      })
    }
    return newArray
  }

  function getItemHeight () {
    // 获取xx px数据
    const height = window.getComputedStyle(content.value.children[1].children[0]).getPropertyValue('height')
    if (/px$/.test(height)) {
      itemHeight.value = Number(height.slice(0, -2))
    }
    // console.log(itemHeight.value)
  }

  // 获取容器高度
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

  function computeLenAndTop () {
    let currentHeight = 0
    for (const data of useDatas) {
      data.scrollTop = currentHeight
      data.itemHeight = itemHeight.value
      currentHeight += itemHeight.value
    }
    // console.log(useDatas)
  }

  // 以下是methods
  function scrollTo (x: number, y: number) {
    (content.value as HTMLElement).scrollTo(x, y)
  }

  function lookScroll (e: Event) {
    // 计算到当前应该渲染的节点高度，重新渲染结点
    const { scrollTop } = e.target as HTMLElement
    const begin = Math.floor(scrollTop / itemHeight.value)
    const end = Math.ceil((scrollTop + contentHeight.value) / itemHeight.value)
    // 控制节点更新
    if (begin !== beginIndex.value) {
      beginIndex.value = begin
      endIndex.value = end
      nowHeight.value = useDatas[begin].scrollTop
    }
    // console.log(scrollTop, nowHeight.value, totalHeight.value, begin, end)
  }

  return {
    scrollTo,
    lookScroll,
    nowHeight,
    totalHeight,
    beginIndex,
    endIndex,
    content,
    itemHeight
  }
}
