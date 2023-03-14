import { ref, reactive, computed, onMounted } from 'vue'

import { VirtualScrollProps } from '@/types/scroll-types'

export default function (props: VirtualScrollProps) {
  const restItem = 2
  // 现在就是要改这个地方，封装一下，作为数据结构无关
  const useDatas = reactive(packageArray(props.datas as any[]))
  const totalHeight = computed((): number => {
    return useDatas.length * props.itemHeight
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
    // console.log(contentHeight.value, end)
    endIndex.value = end <= useDatas.length ? end : useDatas.length
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
      endIndex.value = end <= useDatas.length - restItem ? end + restItem : end
      nowHeight.value = useDatas[begin].scrollTop
    }
  }

  // 这一步在挂载之前
  (function computeLenAndTop () {
    let currentHeight = 0
    for (const data of useDatas) {
      data.scrollTop = currentHeight
      data.itemHeight = props.itemHeight
      currentHeight += props.itemHeight
    }
  })()

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
