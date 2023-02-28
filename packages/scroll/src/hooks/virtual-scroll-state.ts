import { ref, shallowReactive, computed, onMounted } from 'vue'

import { VirtualScrollProps } from '@/types/scroll-types'

export default function (props: VirtualScrollProps) {
  const restItem = 2
  const datas = shallowReactive(props.datas as any[])
  const totalHeight = computed((): number => {
    return datas.length * props.itemHeight
  })
  const beginIndex = ref(0)
  const endIndex = ref(0)
  const nowHeight = ref(0)

  // 获取到的容器的高度
  const contentHeight = ref(0)
  const content = ref()
  onMounted(() => {
    contentHeight.value = content.value.clientHeight
    const end = Math.ceil(contentHeight.value / props.itemHeight + restItem)
    console.log(contentHeight.value, end)
    endIndex.value = end <= datas.length ? end : datas.length
  })

  function scrollTo (x: number, y: number) {
    (content.value as HTMLElement).scrollTo(x, y)
  }

  function lookScroll (e: Event) {
    // 计算到当前应该渲染的节点高度，重新渲染结点
    const { scrollTop } = e.target as HTMLElement
    const begin = Math.floor(scrollTop / props.itemHeight)
    const end = Math.ceil((scrollTop + contentHeight.value) / props.itemHeight)

    if (!(begin === beginIndex.value)) {
      beginIndex.value = begin
      endIndex.value = end <= datas.length - restItem ? end + restItem : end
      nowHeight.value = datas[begin].scrollTop
    }
  }

  // 这一步在挂载之前
  (function computeLenAndTop () {
    let currentHeight = 0
    for (const data of datas) {
      data.scrollTop = currentHeight
      data.itemHeight = props.itemHeight
      currentHeight += props.itemHeight
    }
  })()

  return {
    scrollTo,
    lookScroll,
    nowHeight,
    totalHeight,
    beginIndex,
    endIndex,
    content
  }
}
