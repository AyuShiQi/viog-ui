// vue
import { provide } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  const aliasMap = new Map<string, string>()
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  provide('select-alias-map', aliasMap)
  // 生命周期
  return {
    aliasMap
  }
}
