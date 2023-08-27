// vue
import { ref, onMounted, onBeforeUnmount } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, rowOption: number[], colOption: number[]) {
  // 普通常量
  let prex = 0
  let prey = 0
  // DOM ref
  // ref
  const col = ref(0)
  const row = ref(0)
  const isCol = ref(false)
  const isRow = ref(false)
  // reactive
  // inject
  // computed
  // 事件方法
  function handleRowResizeMousedown (e: MouseEvent, rown: number) {
    if (isRow.value) return
    isRow.value = true
    isCol.value = false
    row.value = rown
    prey = e.y
  }

  function handleColResizeMousedown (e: MouseEvent, coln: number) {
    if (isCol.value) return
    isRow.value = false
    isCol.value = true
    col.value = coln
    prex = e.x
  }

  function handleRowResizeMouseup (e: MouseEvent) {
    isRow.value = false
  }

  function handleColResizeMouseup (e: MouseEvent) {
    isCol.value = false
  }

  function handleRowResize (e: MouseEvent) {
    if (!isRow.value) return
    const tempChange = e.y - prey
    const height = rowOption[row.value]
    if (height + tempChange < props.minHeight) {
      rowOption[row.value] = props.minHeight
      prey -= (height - props.minHeight)
    } else {
      rowOption[row.value] = height + tempChange
      prey = e.y
    }
  }

  function handleColResize (e: MouseEvent) {
    if (!isCol.value) return
    const tempChange = e.x - prex
    const width = colOption[col.value]
    if (width + tempChange < props.minWidth) {
      colOption[col.value] = props.minWidth
      prex -= (width - props.minWidth)
    } else {
      colOption[col.value] = width + tempChange
      prex = e.x
    }
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    window.addEventListener('mouseup', handleColResizeMouseup)
    window.addEventListener('mouseup', handleRowResizeMouseup)
    window.addEventListener('mousemove', handleColResize)
    window.addEventListener('mousemove', handleRowResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mouseup', handleColResizeMouseup)
    window.removeEventListener('mouseup', handleRowResizeMouseup)
    window.removeEventListener('mousemove', handleColResize)
    window.removeEventListener('mousemove', handleRowResize)
  })
  return {
    handleRowResizeMousedown,
    handleColResizeMousedown
  }
}
