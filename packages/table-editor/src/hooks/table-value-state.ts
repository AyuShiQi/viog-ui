// vue
import { ref, reactive, provide, onMounted } from 'vue'
// vue type
import type { SetupContext, Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext, table: Ref) {
  // 普通常量
  // DOM ref
  // ref
  const needPick = ref(false)
  // reactive
  const chooseTarget = reactive([-1, -1] as [number, number])
  const editTarget = reactive([-1, -1] as [number, number])
  const entireTarget = reactive([-1, -1] as [number, number])
  const pickTarget = reactive({
    rowStart: -1,
    rowEnd: -1,
    colStart: -1,
    colEnd: -1
  })
  // inject
  // computed
  // 事件方法
  function handleHeaderClick (e: Event, col: number) {
    entireTarget[1] = col
    entireTarget[0] = -1
    chooseTarget[0] = chooseTarget[1] = -1
  }

  function handleSiderClick (e: Event, row: number) {
    entireTarget[0] = row
    entireTarget[1] = -1
    chooseTarget[0] = chooseTarget[1] = -1
  }

  function handlePointerMouseDown (e: Event) {
    needPick.value = true
    console.log(e)
  }

  function handlePointerMouseMove (e: Event) {
    if (!needPick.value) return
    // console.log(e)
    console.log('ok')
  }

  function handlePointerMouseUp (e: Event) {
    needPick.value = false
  }
  // 方法
  function editValue (row: number, col: number, newVal: any) {
    props.modelValue[row][col] = newVal
  }
  // 普通function函数
  // provide
  provide('table-editor-choose-target', chooseTarget)
  provide('table-editor-edit-target', editTarget)
  provide('table-editor-entire-target', entireTarget)
  provide('table-editor-edit-value', editValue)
  // 生命周期
  onMounted(() => {
    table.value.parentNode.addEventListener('mouseup', handlePointerMouseUp)
  })

  return {
    entireTarget,
    chooseTarget,
    handleHeaderClick,
    handleSiderClick,
    handlePointerMouseDown,
    handlePointerMouseMove,
    handlePointerMouseUp
  }
}
