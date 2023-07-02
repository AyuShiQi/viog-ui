// vue
import { reactive, provide } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
import { TitleOption } from '../types/table-column'
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  /**
   * 用于收集column title列表
   */
  const titles = reactive([] as TitleOption[])
  // reactive
  // inject
  // computed
  // 事件方法
  function handelUpdateModelValue (newValue: any) {
    ctx.emit('update:pickValue', newValue)
  }
  // 方法
  function addTitle (option: TitleOption) {
    titles.push(option)
  }
  // 普通function函数
  // provide
  provide('table-add-title', addTitle)
  // 生命周期
  return {
    handelUpdateModelValue,
    titles
  }
}
