// vue
import { reactive, provide } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  const list = [] as any[]
  // DOM ref
  // ref
  // reactive
  // const
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  function infoPick (index: number, value: any) {
    list[index] = value
  }
  // provide
  provide('drag-list-info-pick', infoPick)
  provide('drag-list-info-list', list)
  // 生命周期
}
