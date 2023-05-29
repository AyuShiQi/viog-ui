// vue
import { ref, reactive, provide } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  const chooseTarget = reactive([-1, -1] as [number, number])
  const editTarget = reactive([-1, -1] as [number, number])
  const entireTarget = reactive([-1, -1] as [number, number])
  const pickTarget = reactive({
    rowStart: -1,
    rowEnd: -1,
    colStart: -1,
    colEnd: -1
  })
  // reactive
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
  return {
    entireTarget,
    chooseTarget,
    handleHeaderClick,
    handleSiderClick
  }
}
