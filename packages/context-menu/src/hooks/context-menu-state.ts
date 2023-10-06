// vue
import { ref, onMounted, onBeforeUnmount } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import pxToNum from '../../../utils/number-utils/pxstr-to-number'

export default function () {
  // 普通常量
  const optionListSize = {
    width: 0,
    height: 0
  }
  // DOM ref
  const contextMenu = ref()
  const triggerBox = ref()
  // ref
  const isVisible = ref(false)
  const listLeft = ref(0)
  const listTop = ref(0)
  // reactive
  // inject
  // computed
  // 事件方法
  function handleMousedown (e: MouseEvent) {
    if (e.button === 2) {
      isVisible.value = true
      changeListPosition(e.x, e.y)
    }
  }

  function handleContextMenu (e: Event) {
    e.preventDefault()
  }
  // 方法
  function handleBlur (e: MouseEvent) {
    if (!isVisible.value) return
    if (contextMenu.value.contains(e.target) || triggerBox.value.contains(e.target)) return
    isVisible.value = false
  }

  function disappear () {
    isVisible.value = false
  }
  // 普通function函数
  /**
   * 调整list框所在方位
   * @param mx 鼠标x轴
   * @param my 鼠标y轴
   */
  function changeListPosition (mx: number, my: number) {
    const { innerHeight, innerWidth } = window
    // console.log(mx + optionListSize.width, innerWidth)
    // x轴区
    if (mx + optionListSize.width <= innerWidth) listLeft.value = mx
    else if (mx - optionListSize.width >= 0) listLeft.value = mx - optionListSize.width
    // 做处理
    else {
      const now = innerWidth - optionListSize.width
      listLeft.value = now >= 0 ? now : mx
    }

    // y轴区
    if (my + optionListSize.height <= innerHeight) listTop.value = my
    else if (my - optionListSize.height >= 0) listTop.value = my - optionListSize.height
    // 做处理
    else {
      const now = innerHeight - optionListSize.height
      listTop.value = now >= 0 ? now : my
    }
  }
  // provide
  // 生命周期
  onMounted(() => {
    if (contextMenu.value) {
      const styles = window.getComputedStyle(contextMenu.value)
      optionListSize.width = pxToNum(styles.getPropertyValue('--vi-context-menu-width'))
      optionListSize.height = pxToNum(styles.getPropertyValue('--vi-context-menu-height'))
    }
    window.addEventListener('mousedown', handleBlur)
    window.addEventListener('scroll', disappear)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousedown', handleBlur)
    window.removeEventListener('scroll', disappear)
  })

  return {
    contextMenu,
    triggerBox,
    listLeft,
    listTop,
    isVisible,
    handleMousedown,
    handleContextMenu,
    disappear
  }
}
