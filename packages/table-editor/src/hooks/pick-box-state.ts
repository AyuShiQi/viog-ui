// vue
import { ref, reactive, provide, onMounted, computed, watch, onBeforeUnmount } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
import type { BoxSizeState } from '../types/box-size-types'
// 外部hooks
// 内部hooks
// 外部模块

/**
 * 编辑框选中框等的展现和功能
 * @param props props
 * @param ctx crx
 * @param boxSize 编辑组件的大小信息
 * @param chooseTarget 选中的目标格子
 * @param value 表格的数据
 */
export default function (props: any, ctx: SetupContext, boxSize: BoxSizeState, chooseTarget: [number, number], value: any) {
  // 普通常量
  // DOM ref
  // ref
  const needChange = ref(false)
  const needPick = ref(false)
  const { headerHeight: hh, siderWidth: sw, tdWidth: tw, tdHeight: th } = boxSize
  // reactive
  const pickTarget = reactive({
    row: -1,
    col: -1,
    rowLen: -1,
    colLen: -1,
    rowStart: -1,
    rowEnd: -1,
    colStart: -1,
    colEnd: -1
  })
  const changeTarget = reactive({
    row: -1,
    col: -1
  })
  // inject
  // computed

  // pick组
  const pickBoxShow = computed(() => {
    return pickTarget.row !== -1 && pickTarget.col !== -1
  })

  const pickTop = computed(() => {
    if (pickTarget.rowLen >= 0) {
      return `${hh.value + pickTarget.row * th.value}px`
    }
    return `${hh.value + (pickTarget.row + pickTarget.rowLen) * th.value}px`
  })

  const pickLeft = computed(() => {
    if (pickTarget.colLen >= 0) {
      return `${sw.value + pickTarget.col * tw.value}px`
    }
    return `${sw.value + (pickTarget.col + pickTarget.colLen) * tw.value}px`
  })

  const pickWidth = computed(() => {
    if (pickTarget.colLen < 0) return `${(-pickTarget.colLen + 1) * tw.value - 1}px`
    return `${(pickTarget.colLen + 1) * tw.value - 1}px`
  })

  const pickHeight = computed(() => {
    if (pickTarget.rowLen < 0) return `${(-pickTarget.rowLen + 1) * th.value - 1}px`
    return `${(pickTarget.rowLen + 1) * th.value - 1}px`
  })

  const changeTop = computed(() => {
    if (changeTarget.row < pickTarget.rowStart) return `${hh.value + changeTarget.row * th.value}px`
    return `${hh.value + pickTarget.rowStart * th.value}px`
  })

  const changeLeft = computed(() => {
    if (changeTarget.col < pickTarget.colStart) return `${sw.value + changeTarget.col * tw.value}px`
    return `${sw.value + pickTarget.colStart * tw.value}px`
  })

  const changeWidth = computed(() => {
    if (changeTarget.col < pickTarget.colStart) return `${tw.value * (pickTarget.colEnd - changeTarget.col + 1) - 1}px`
    else if (pickTarget.colStart <= changeTarget.col && changeTarget.col <= pickTarget.colEnd) {
      return `${tw.value * (pickTarget.colEnd - pickTarget.colStart + 1) - 1}px`
    }
    return `${tw.value * (changeTarget.col - pickTarget.colStart + 1) - 1}px`
  })

  const changeHeight = computed(() => {
    if (changeTarget.row < pickTarget.rowStart) return `${th.value * (pickTarget.rowEnd - changeTarget.row + 1) - 1}px`
    else if (pickTarget.rowStart <= changeTarget.row && changeTarget.row <= pickTarget.rowEnd) {
      return `${th.value * (pickTarget.rowEnd - pickTarget.rowStart + 1) - 1}px`
    }
    return `${th.value * (changeTarget.row - pickTarget.rowStart + 1) - 1}px`
  })
  // watch
  watch(chooseTarget, (newVal) => {
    pickTarget.row = newVal[0]
    pickTarget.col = newVal[1]
    pickTarget.colLen = 0
    pickTarget.rowLen = 0
  })
  // 事件方法
  function handlePointerMouseDown (e: Event) {
    needChange.value = true
    // console.log(e)
  }

  function handlePointerMouseUp (e: Event) {
    if (needPick.value) {
      needPick.value = false
      pickTarget.rowStart = Math.min(pickTarget.row, pickTarget.row + pickTarget.rowLen)
      pickTarget.rowEnd = Math.max(pickTarget.row, pickTarget.row + pickTarget.rowLen)
      pickTarget.colStart = Math.min(pickTarget.col, pickTarget.col + pickTarget.colLen)
      pickTarget.colEnd = Math.max(pickTarget.col, pickTarget.col + pickTarget.colLen)
    }
    if (needChange.value) {
      needChange.value = false
      // 数据覆盖
      changeValue()
    }
  }
  // 方法
  // 普通function函数
  function changeValue () {
    // 长度获取
    const { rowStart, rowEnd, colStart, colEnd } = pickTarget
    const { row, col } = changeTarget
    const rowLen = rowEnd - rowStart + 1
    const colLen = colEnd - colStart + 1
    // 四角区域处理部分
    // 右下角区域处理
    if (col > colEnd && row > rowEnd) {
      coverValue(rowEnd + 1, row, colEnd + 1, col, rowLen, colLen, rowStart, colStart)
    // 右上角区域处理
    } else if (col > colEnd && row < rowStart) {
      coverValue(row, rowStart - 1, colEnd + 1, col, rowLen, colLen, rowStart, colStart)
    // 左下角区域处理
    } else if (col < colStart && row > rowEnd) {
      coverValue(rowEnd + 1, row, col, colEnd - 1, rowLen, colLen, rowStart, colStart)
    // 左上角区域处理
    } else if (col < colStart && row < rowStart) {
      coverValue(row, rowStart - 1, col, colStart - 1, rowLen, colLen, rowStart, colStart)
    }
    // 十字区域处理部分
    // 右边
    if (col > colEnd) {
      coverValue(rowStart, rowEnd, colEnd + 1, col, rowLen, colLen, rowStart, colStart)
    }
    // 下边
    if (row > rowEnd) {
      coverValue(rowEnd + 1, row, colStart, colEnd, rowLen, colLen, rowStart, colStart)
    }
    // 左边
    if (col < colStart) {
      coverValue(rowStart, rowEnd, col, colStart - 1, rowLen, colLen, rowStart, colStart)
    }
    // 上边
    if (row < rowStart) {
      coverValue(row, rowStart - 1, colStart, colEnd, rowLen, colLen, rowStart, colStart)
    }
  }

  function coverValue (rowStart: number, rowEnd: number, colStart: number, colEnd: number, rowLen: number, colLen: number, row: number, col: number) {
    let coverRow = 0
    for (let i = rowStart; i <= rowEnd; i++) {
      let coverCol = 0
      for (let j = colStart; j <= colEnd; j++) {
        value[i][j] = value[coverRow + row][coverCol + col]
        coverCol = (coverCol + 1) % colLen
      }
      coverRow = (coverRow + 1) % rowLen
    }
  }
  // provide
  provide('table-editor-pick-target', pickTarget)
  provide('table-editor-change-target', changeTarget)
  provide('table-editor-need-change', needChange)
  provide('table-editor-need-pick', needPick)
  // 生命周期
  onMounted(() => {
    window.addEventListener('mouseup', handlePointerMouseUp)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mouseup', handlePointerMouseUp)
  })

  return {
    needChange,
    needPick,
    pickTarget,
    changeTarget,
    pickBoxShow,
    pickTop,
    pickLeft,
    pickWidth,
    pickHeight,
    changeTop,
    changeLeft,
    changeWidth,
    changeHeight,
    handlePointerMouseDown,
    handlePointerMouseUp
  }
}
