// vue
import { onMounted, ref, onBeforeUnmount, onUpdated } from 'vue'
// vue type
import type { Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (content: Ref) {
  // 普通常量
  let position = 0
  let mouseX = 0
  let mouseY = 0
  // DOM ref
  // ref
  const barTop = ref(0)
  const barLeft = ref()
  const barHeight = ref(0)
  const barWidth = ref(0)
  const beginScroll = ref(false)
  // reactive
  // inject
  // computed
  // 事件方法
  function handleScroll (e: WheelEvent) {
    const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = content.value
    barTop.value = scrollTop * clientHeight / scrollHeight
    barLeft.value = scrollLeft * clientWidth / scrollWidth
  }

  function handleMousedown (e: MouseEvent, p: number) {
    position = p;
    ({ x: mouseX, y: mouseY } = e)
    beginScroll.value = true
  }

  function handleMousemove (e: MouseEvent) {
    if (!beginScroll.value) return
    const { x, y } = e
    if (position === 0) {
      const { scrollHeight, clientHeight } = content.value
      const distance = (y - mouseY) * scrollHeight / clientHeight
      content.value.scrollBy(0, distance)
      mouseY = y
    } else {
      const { scrollWidth, clientWidth } = content.value
      const distance = (x - mouseX) * scrollWidth / clientWidth
      content.value.scrollBy(distance, 0)
      mouseX = x
    }
    content.value.scrollTo()
  }

  function handleMouseup () {
    beginScroll.value = false
  }
  // 方法
  // 普通function函数
  function calcScrollBarPosition () {
    const { scrollHeight, clientHeight, scrollWidth, clientWidth, scrollTop, scrollLeft } = content.value
    if (scrollHeight <= clientHeight) barHeight.value = 0
    else barHeight.value = clientHeight * clientHeight / scrollHeight
    if (scrollWidth <= clientWidth) barWidth.value = 0
    else barWidth.value = clientWidth * clientWidth / scrollWidth
    barTop.value = scrollTop * clientHeight / scrollHeight
    barLeft.value = scrollLeft * clientWidth / scrollWidth
  }

  function calcScrollBarSize () {
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = content.value
    if (scrollHeight <= clientHeight) barHeight.value = 0
    else barHeight.value = clientHeight * clientHeight / scrollHeight
    if (scrollWidth <= clientWidth) barWidth.value = 0
    else barWidth.value = clientWidth * clientWidth / scrollWidth
  }
  // provide
  // 生命周期
  onMounted(() => {
    calcScrollBarSize()
    content.value.addEventListener('scroll', handleScroll)
    window.addEventListener('mouseup', handleMouseup)
    window.addEventListener('mouseleave', handleMouseup)
    window.addEventListener('mousemove', handleMousemove)
  })

  onUpdated(() => {
    calcScrollBarPosition()
  })

  onBeforeUnmount(() => {
    content.value.removeEventListener('scroll', handleScroll)
    window.removeEventListener('mouseup', handleMouseup)
    window.removeEventListener('mouseleave', handleMouseup)
    window.removeEventListener('mousemove', handleMousemove)
  })

  return {
    barHeight,
    barWidth,
    barTop,
    barLeft,
    beginScroll,
    handleMousedown
  }
}
