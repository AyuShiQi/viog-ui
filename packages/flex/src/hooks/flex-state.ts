// vue
import { onMounted, onBeforeUnmount, ref } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  const option = {
    width: 0,
    height: 0,
    minWidth: 0,
    minHeight: 0,
    maxWidth: 0,
    maxHeight: 0
  }
  // DOM ref
  const flexBox = ref()
  // ref
  const isVertical = ref(false)
  const isHorizontal = ref(false)
  const width = ref()
  const height = ref()
  // reactive
  // inject
  // computed
  // 事件方法
  let startX = 0
  let startY = 0
  function handleVerticalMousedown () {
    if (isVertical.value) return
    isVertical.value = true
    const { left, width } = flexBox.value.getBoundingClientRect()
    switch (props.vertical) {
      case 'left':
        startX = left + width
        break
      case 'right':
        startX = left
        break
    }
  }
  function handleHorizontalMousedown () {
    if (isHorizontal.value) return
    isHorizontal.value = true
    const { top, height } = flexBox.value.getBoundingClientRect()
    switch (props.horizontal) {
      case 'top':
        startY = top + height
        break
      case 'bottom':
        startY = top
        break
    }
  }
  function handleVerticalMouseup () {
    isVertical.value = false
  }
  function handleHorizontalMouseup () {
    isHorizontal.value = false
  }
  function handleVerticalMousemove (e: MouseEvent) {
    if (!isVertical.value) return
    switch (props.vertical) {
      case 'left':
        if (startX - e.x >= option.maxWidth) {
          width.value = option.maxWidth
        } else if (startX - e.x > option.minWidth) {
          width.value = startX - e.x
        } else width.value = option.minWidth
        break
      case 'right':
        if (e.x - startX >= option.maxWidth) {
          width.value = option.maxWidth
        } else if (e.x - startX > option.minWidth) {
          width.value = e.x - startX
        } else width.value = option.minWidth
        break
      default:
        width.value = undefined
        break
    }
  }
  function handleHorizontalMousemove (e: MouseEvent) {
    if (!isHorizontal.value) return
    switch (props.horizontal) {
      case 'top':
        if (startY - e.y >= option.maxHeight) {
          height.value = option.maxHeight
        } else if (startY - e.y > option.minHeight) {
          height.value = startY - e.y
        } else height.value = option.minHeight
        break
      case 'bottom':
        if (e.y - startY >= option.maxHeight) {
          height.value = option.maxHeight
        } else if (e.y - startY > option.minHeight) {
          height.value = e.y - startY
        } else height.value = option.minHeight
        break
      default:
        height.value = undefined
        break
    }
  }
  // 方法
  // 普通function函数
  function getStyle () {
    const styles = window.getComputedStyle(flexBox.value)
    option.width = pxToNum(styles.getPropertyValue('--vi-flex-default-width'))
    option.height = pxToNum(styles.getPropertyValue('--vi-flex-default-height'))
    option.minWidth = pxToNum(styles.getPropertyValue('--vi-flex-min-width'))
    option.minHeight = pxToNum(styles.getPropertyValue('--vi-flex-min-height'))
    option.maxWidth = pxToNum(styles.getPropertyValue('--vi-flex-max-width'))
    option.maxHeight = pxToNum(styles.getPropertyValue('--vi-flex-max-height'))
  }

  function pxToNum (str: string) {
    if (/px$/.test(str)) {
      return Number(str.slice(0, -2))
    }
    return 0
  }
  // provide
  // 生命周期
  onMounted(() => {
    window.addEventListener('mouseup', handleHorizontalMouseup)
    window.addEventListener('mouseup', handleVerticalMouseup)
    window.addEventListener('mousemove', handleHorizontalMousemove)
    window.addEventListener('mousemove', handleVerticalMousemove)
    // 获取元素属性
    getStyle()
    width.value = props.vertical === 'none' ? undefined : option.width
    height.value = props.horizontal === 'none' ? undefined : option.height
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mouseup', handleHorizontalMouseup)
    window.removeEventListener('mouseup', handleVerticalMouseup)
    window.removeEventListener('mousemove', handleHorizontalMousemove)
    window.removeEventListener('mousemove', handleVerticalMousemove)
  })
  return {
    flexBox,
    isVertical,
    isHorizontal,
    width,
    height,
    handleVerticalMousedown,
    handleHorizontalMousedown
  }
}
