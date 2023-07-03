// vue
import { ref, onMounted, onBeforeUnmount } from 'vue'
// vue type
import type { Ref } from 'vue'
// 组件type
import type { BoxSizeState } from '../types/box-size-types'
// 外部hooks
// 内部hooks
// 外部模块

export default function (table: Ref, needPick: Ref<boolean>, needChange: Ref<boolean>, boxSize: BoxSizeState) {
  // 普通常量
  // DOM ref
  const tableBody = ref()
  // ref
  const tableLeft = ref(0)
  const tableTop = ref(0)
  const { headerHeight, siderWidth } = boxSize
  // 用于记录此时是否需要进行拖拽
  const scrollDrag = ref(false)
  // reactive
  // inject
  // computed
  // 事件方法
  function scrollListener (e: Event) {
    tableLeft.value = (e.target as any)?.scrollLeft
    tableTop.value = (e.target as any)?.scrollTop
  }

  // 开启拖动模式
  let timer = -1
  let toX = 0
  let toY = 0
  let scrollLeft = 0
  let scrollTop = 0
  let mx = 0
  let my = 0
  function handleMouseleave (e: MouseEvent) {
    if (!(needChange.value || needPick.value)) return
    scrollDrag.value = true

    if (timer !== -1) return
    ({ scrollLeft, scrollTop } = table.value.$el.children[2])

    const { x, y, width, height } = table.value.$el.children[2].getBoundingClientRect()
    // console.log(x, y, width, height)
    timer = requestAnimationFrame(step)

    function step () {
      if (!scrollDrag.value) {
        requestAnimationFrame(step)
        return
      }
      if (!(needChange.value || needPick.value)) {
        toX = 0
        toY = 0
        timer = -1
        scrollDrag.value = false
        return
      }
      if (mx - siderWidth.value <= x) toX--
      else if (mx >= x + width) toX++
      if (my - headerHeight.value <= y) toY--
      else if (my >= height + y) toY++
      table.value.scrollTo(scrollLeft + (toX * 10), scrollTop + (toY * 10))
      requestAnimationFrame(step)
    }
  }

  function handleMouseEnter (e: MouseEvent) {
    scrollDrag.value = false
  }

  function handleMouseMove (e: MouseEvent) {
    if (!scrollDrag.value) return
    ({ x: mx, y: my } = e)
    // console.log(mx, my)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    tableBody.value.addEventListener('mouseleave', handleMouseleave)
    tableBody.value.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mousemove', handleMouseMove)
  })

  onBeforeUnmount(() => {
    tableBody.value.removeEventListener('mouseleave', handleMouseleave)
    tableBody.value.removeEventListener('mouseenter', handleMouseEnter)
    document.removeEventListener('mousemove', handleMouseMove)
  })
  return {
    tableBody,
    tableLeft,
    tableTop,
    scrollListener
  }
}
