// vue
import { reactive, provide } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext, value: any) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  /**
   * 绿色框初次点击选中的格子下标，和编辑是一样的
   */
  const chooseTarget = reactive([-1, -1] as [number, number])
  /**
   * 双击编辑的格子下标
   */
  const editTarget = reactive([-1, -1] as [number, number])
  /**
   * 选中的整行行整列下标
   */
  const entireTarget = reactive([-1, -1] as [number, number])
  // inject
  // computed
  // watched
  // 事件方法
  /**
   * 处理点击header格子
   * @param e 事件
   * @param col 列数
   */
  function handleHeaderClick (e: Event, col: number) {
    entireTarget[1] = col
    entireTarget[0] = -1
    chooseTarget[0] = chooseTarget[1] = -1
  }
  /**
   * 处理点击sider格子
   * @param e 事件
   * @param row 行数
   */
  function handleSiderClick (e: Event, row: number) {
    entireTarget[0] = row
    entireTarget[1] = -1
    chooseTarget[0] = chooseTarget[1] = -1
  }
  // 方法
  /**
   * 编辑单个格子
   * @param row 行数
   * @param col 列数
   * @param newVal 新的值
   */
  function editValue (row: number, col: number, newVal: any) {
    value[row][col] = newVal
  }
  // 普通function函数
  // provide
  provide('table-editor-choose-target', chooseTarget) // 绿色框初次点击选中的格子下标，和编辑是一样的
  provide('table-editor-edit-target', editTarget) // 双击编辑的格子下标
  provide('table-editor-entire-target', entireTarget) // 选中的整行行整列下标
  provide('table-editor-edit-value', editValue) // 编辑单个格子
  // 生命周期

  return {
    entireTarget,
    chooseTarget,
    handleHeaderClick,
    handleSiderClick
  }
}
