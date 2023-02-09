import { ref, getCurrentInstance, shallowReactive } from 'vue'
import type { ComponentInternalInstance } from 'vue'

import { VirtualScrollProps } from '@/types/scroll-types'

import { DOMType } from '@/types/vue-types'

export default function (props: VirtualScrollProps) {
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
