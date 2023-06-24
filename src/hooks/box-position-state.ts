import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'

/**
 * 一个用于计算下拉框渲染定位的hooks
 * @param mode 模式，是自动选择渲染方位还是自定义渲染方位  top/bottom/left/right/auto 默认是auto
 * @param parentNode list将会针对于那个父节点滚动，可以传入app、一个id名、或者什么都不传（所有情况下我们都会绑定window scroll）
 */
export default function (mode = 'auto', parentNodeId?: string | Element) {
  const parentNode = ref()
  /**
   * dropdown list
   */
  const dropdown = ref()
  /**
   * dropdown view
   */
  const boxPositionDOM = ref()
  /**
   * dropdown list 宽度
   */
  const width = ref(0)
  /**
   * dropdown list 高度
   */
  const height = ref(0)
  /**
   * list相对于父盒子的top定位
   */
  const listTop = ref(0)
  /**
   * list相对于父盒子的left定位
   */
  const listLeft = ref(0)
  /**
   * 展开方位
   * top down left right
   */
  const direction = ref(mode === 'auto' ? 'bottom' : mode)

  /**
   * 更改list渲染位置，有节流处理
   */
  const toChangeViewPosition = (function () {
    let timer: any
    return function () {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        calcSize()
        if (!boxPositionDOM.value || !boxPositionDOM.value.getBoundingClientRect) return
        const { left, bottom, top, width: w } = boxPositionDOM.value.getBoundingClientRect()
        // console.log(width.value, height.value, left, top)

        if (mode === 'left' || mode === 'right') {
          if (direction.value === 'right') {
            listLeft.value = left + w
          } else listLeft.value = -width.value
          calcLeftAndRightListTop(top)
          return
        }

        if (mode === 'bottom' || mode === 'top') {
          if (direction.value === 'bottom') {
            direction.value = 'bottom'
            listTop.value = 0
          } else {
            direction.value = 'top'
            listTop.value = -height.value
          }
          calcBottomAndTopListLeft(left, w)
          return
        }

        // bottom -> top -> right -> left
        // 必须满足该条件，才能够从底部/顶部展开
        if (bottom + height.value <= innerHeight || top - height.value >= 0) {
          // 若是从底部展开
          if (bottom + height.value <= innerHeight) {
            direction.value = 'bottom'
            listTop.value = 0
          } else {
            direction.value = 'top'
            listTop.value = -height.value
          }
          calcBottomAndTopListLeft(left, w)
          // console.log(listTop.value, listLeft.value)
          return
        }
        // 是否能从右面/左面展开
        if (left + w + width.value <= innerWidth || left - width.value >= 0) {
          if (left + w + width.value <= innerWidth) {
            direction.value = 'right'
            listLeft.value = w
          } else {
            direction.value = 'left'
            listLeft.value = -width.value
          }
          calcLeftAndRightListTop(top)
          return
        }

        // 这也不行那也不行，先不管了，就在底部显示
        direction.value = 'bottom'
        listTop.value = 0
        listLeft.value = 0
      })
    }
  })()

  function calcBottomAndTopListLeft (viewLeft: number, viewWidth: number) {
    /**
     * 计算的是若居中展示时list的left坐标
     */
    const tempListLeft = viewLeft + viewWidth / 2 - width.value / 2
    // 首先查看是否能居中展示
    if (tempListLeft >= 0 && tempListLeft + width.value <= innerWidth) {
      // 如果list比view小
      if (width.value === 0) listLeft.value = 0
      else listLeft.value = tempListLeft - viewLeft
    // 无法居中看是否可以靠右
    } else if (viewLeft + width.value <= innerWidth) {
      if (viewLeft >= 0) listLeft.value = 0
      else listLeft.value = -viewLeft
    // 是否可以居左显示
    } else if (viewLeft + viewWidth - width.value >= 0) {
      if (viewLeft + viewWidth <= innerHeight) listLeft.value = viewWidth - width.value
      else listLeft.value = -viewLeft - width.value + innerHeight
    // 如果都不行，只能代表这个展示框没办法展开完全，直接摆烂对齐左方显示
    } else {
      listLeft.value = 0
    }
  }

  function calcLeftAndRightListTop (viewTop: number) {
    // 先看可不可以list顶部贴近view顶部展开
    if (viewTop + height.value <= innerHeight) {
      console.log('ok')
      listTop.value = 0
    // 不可以就往上走，直到view顶部贴近list底部,显示不完全也没办法，摆烂就行
    } else {
      // console.log(top, height.value, innerHeight)
      listTop.value = -viewTop - height.value + innerHeight
      // 尽量不要靠到最底部
    }
  }
  /**
   * 计算list的宽度与高度
   * @returns 宽度与高度
   */
  function calcSize (): void {
    // console.log(dropdown.value)
    if (!dropdown?.value?.children[0]) return
    const dropdwonStyle = window.getComputedStyle(dropdown.value.children[0])
    const tempHeight = dropdwonStyle.getPropertyValue('height')
    const maxTemp = dropdwonStyle.getPropertyValue('max-height')
    if (/.*px/.test(tempHeight) && tempHeight !== '0px') height.value = Number((tempHeight).slice(0, -2))
    if (/.*px/.test(maxTemp) && maxTemp !== '0px') height.value = Math.min(Number((maxTemp).slice(0, -2)), height.value)
    const tempWidth = dropdwonStyle.getPropertyValue('width')
    if (/.*px/.test(tempWidth) && tempWidth !== '0px') width.value = Number((tempWidth).slice(0, -2))
  }

  function getParentNode () {
    if (!parentNodeId) return
    if (typeof parentNodeId === 'string') {
      // 绑定app的scroll
      if (parentNodeId === 'app') {
        parentNode.value = getCurrentInstance()?.appContext.app
      } else {
        parentNode.value = document.querySelector(parentNodeId)
      }
    // 直接是节点
    } else {
      parentNode.value = parentNodeId
    }
  }

  onBeforeUnmount(() => {
    if (parentNode.value) parentNode.value?.removeEventListener('scroll', toChangeViewPosition)
    window.removeEventListener('resize', toChangeViewPosition)
    window.removeEventListener('scroll', toChangeViewPosition)
  })

  onMounted(() => {
    toChangeViewPosition()
    // 如果有父节点，绑定一下scroll
    getParentNode()
    if (parentNode.value) parentNode.value?.addEventListener('scroll', toChangeViewPosition)
    window.addEventListener('resize', toChangeViewPosition)
    window.addEventListener('scroll', toChangeViewPosition)
  })

  return {
    dropdown,
    boxPositionDOM,
    listTop,
    listLeft,
    direction,
    toChangeViewPosition,
    calcSize
  }
}
