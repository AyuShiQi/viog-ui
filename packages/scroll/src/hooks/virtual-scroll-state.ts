import { ref, reactive, computed, onMounted, onUpdated } from 'vue'

import { VirtualScrollProps } from '@/types/scroll-types'

export default function (props: VirtualScrollProps) {
  // 现在就是要改这个地方，封装一下，作为数据结构无关
  const useDatas = reactive(packageArray(props.datas as any[]))
  const beginIndex = ref(0)
  const endIndex = ref(0)
  const nowHeight = ref(0)
  const itemHeight = ref(0)
  const totalHeight = computed((): number => {
    return useDatas.length * itemHeight.value
  })

  // 获取到的容器的高度
  const contentHeight = ref(0)
  const content = ref()
  let first = true
  onMounted(() => {
    // 获取xx px数据
    if (first) {
      first = false
      const height = window.getComputedStyle(content.value.children[1].children[0]).getPropertyValue('height')
      if (/px$/.test(height)) {
        itemHeight.value = Number(height.slice(0, -2))
      }
    }
    // 获取容器高度
    contentHeight.value = content.value.clientHeight
    const end = Math.ceil(contentHeight.value / itemHeight.value)
    // 计算第一次结尾高度
    endIndex.value = end < useDatas.length ? end : useDatas.length
    computeLenAndTop()
  })

  function computeLenAndTop () {
    let currentHeight = 0
    for (const data of useDatas) {
      data.scrollTop = currentHeight
      data.itemHeight = itemHeight.value
      currentHeight += itemHeight.value
    }
  }

  function scrollTo (x: number, y: number) {
    (content.value as HTMLElement).scrollTo(x, y)
  }

  function lookScroll (e: Event) {
    // 计算到当前应该渲染的节点高度，重新渲染结点
    const { scrollTop } = e.target as HTMLElement
    const begin = Math.floor(scrollTop / itemHeight.value)
    const end = Math.ceil((scrollTop + contentHeight.value) / itemHeight.value)

    if (!(begin === beginIndex.value)) {
      beginIndex.value = begin
      endIndex.value = end
      nowHeight.value = useDatas[begin].scrollTop
    }
  }

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
    content,
    itemHeight
  }
}
