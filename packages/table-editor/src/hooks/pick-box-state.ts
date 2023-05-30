// vue
import { ref, reactive, provide, onMounted, computed, watch } from 'vue'
// vue type
import type { SetupContext, Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext, chooseTarget: [number, number], table: Ref, value: any) {
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
    colLen: -1
  })
  // inject
  // computed
  const pickBoxShow = computed(() => {
    return pickTarget.row !== -1 && pickTarget.col !== -1
  })

  const pickTop = computed(() => {
    if (pickTarget.rowLen > 0) {
      return `${25 + pickTarget.row * 25}px`
    }
    return `${25 + (pickTarget.row + pickTarget.rowLen) * 25}px`
  })

  const pickLeft = computed(() => {
    if (pickTarget.colLen > 0) {
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

  function handlePointerMouseMove (e: Event) {
    if (!needPick.value) return
    // console.log(e)
    console.log('mousemove')
  }

  function handlePointerMouseUp (e: Event) {
    if (!needPick.value) return
    needPick.value = false
    if (!needChange.value) return
    needChange.value = false
    // 第一版数据覆盖, 还需要修改
    const val = value[pickTarget.row][pickTarget.col]
    // 计算前后坐标
    const rowStart = Math.min(pickTarget.row, pickTarget.row + pickTarget.rowLen)
    const rowEnd = Math.max(pickTarget.row, pickTarget.row + pickTarget.rowLen)
    const colStart = Math.min(pickTarget.col, pickTarget.col + pickTarget.colLen)
    const colEnd = Math.max(pickTarget.col, pickTarget.col + pickTarget.colLen)
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        value[i][j] = val
      }
    }
  }
  // 方法
  // 普通function函数
  // provide
  provide('table-editor-pick-target', pickTarget)
  provide('table-editor-need-Change', needChange)
  provide('table-editor-need-pick', needPick)
  // 生命周期
  onMounted(() => {
    table.value.parentNode.addEventListener('mouseup', handlePointerMouseUp)
  })

  return {
    needChange,
    needPick,
    pickTarget,
    pickBoxShow,
    pickTop,
    pickLeft,
    pickWidth,
    pickHeight,
    handlePointerMouseMove,
    handlePointerMouseDown,
    handlePointerMouseUp
  }
}
