// vue
import { row } from 'packages/layout'
import { ref, reactive, provide, onMounted, computed, watch, onBeforeMount } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext, chooseTarget: [number, number], value: any) {
  // 普通常量
  // DOM ref
  // ref
  const needChange = ref(false)
  const needPick = ref(false)
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
      return `${25 + pickTarget.row * 25}px`
    }
    return `${25 + (pickTarget.row + pickTarget.rowLen) * 25}px`
  })

  const pickLeft = computed(() => {
    if (pickTarget.colLen >= 0) {
      return `${40 + pickTarget.col * 70}px`
    }
    return `${40 + (pickTarget.col + pickTarget.colLen) * 70}px`
  })

  const pickWidth = computed(() => {
    if (pickTarget.colLen < 0) return `${(-pickTarget.colLen + 1) * 70}px`
    return `${(pickTarget.colLen + 1) * 70}px`
  })

  const pickHeight = computed(() => {
    if (pickTarget.rowLen < 0) return `${(-pickTarget.rowLen + 1) * 25}px`
    return `${(pickTarget.rowLen + 1) * 25}px`
  })

  const changeTop = computed(() => {
    if (changeTarget.row < pickTarget.rowStart) return `${25 + changeTarget.row * 25}px`
    return `${25 + pickTarget.rowStart * 25}px`
  })

  const changeLeft = computed(() => {
    if (changeTarget.col < pickTarget.colStart) return `${40 + changeTarget.col * 70}px`
    return `${40 + pickTarget.colStart * 70}px`
  })

  const changeWidth = computed(() => {
    if (changeTarget.col < pickTarget.colStart) return `${70 * (pickTarget.colEnd - changeTarget.col + 1)}px`
    else if (pickTarget.colStart <= changeTarget.col && changeTarget.col <= pickTarget.colEnd) {
      return `${70 * (pickTarget.colEnd - pickTarget.colStart + 1)}px`
    }
    return `${70 * (changeTarget.col - pickTarget.colStart + 1)}px`
  })

  const changeHeight = computed(() => {
    if (changeTarget.row < pickTarget.rowStart) return `${25 * (pickTarget.rowEnd - changeTarget.row + 1)}px`
    else if (pickTarget.rowStart <= changeTarget.row && changeTarget.row <= pickTarget.rowEnd) {
      return `${25 * (pickTarget.rowEnd - pickTarget.rowStart + 1)}px`
    }
    return `${25 * (changeTarget.row - pickTarget.rowStart + 1)}px`
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
      // 第一版数据覆盖, 还需要修改
      const val = value[pickTarget.row][pickTarget.col]
      // 计算前后坐标
      // const rowStart = Math.min(pickTarget.row, pickTarget.row + pickTarget.rowLen)
      // const rowEnd = Math.max(pickTarget.row, pickTarget.row + pickTarget.rowLen)
      // const colStart = Math.min(pickTarget.col, pickTarget.col + pickTarget.colLen)
      // const colEnd = Math.max(pickTarget.col, pickTarget.col + pickTarget.colLen)
      // for (let i = rowStart; i <= rowEnd; i++) {
      //   for (let j = colStart; j <= colEnd; j++) {
      //     value[i][j] = val
      //   }
      // }
    }
  }
  // 方法
  // 普通function函数
  // provide
  provide('table-editor-pick-target', pickTarget)
  provide('table-editor-change-target', changeTarget)
  provide('table-editor-need-change', needChange)
  provide('table-editor-need-pick', needPick)
  // 生命周期
  onMounted(() => {
    window.addEventListener('mouseup', handlePointerMouseUp)
  })

  onBeforeMount(() => {
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
