// vue
import { provide } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (useAlias = true) {
  // 普通常量
  const aliasMap = new Map<string, string>()
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  function aliasShow (value: string) {
    return aliasMap.has(value) ? aliasMap.get(value) : value
  }
  // 普通function函数
  // provide
  if (useAlias) provide('select-alias-map', aliasMap)
  // 生命周期
  return {
    aliasMap: useAlias ? aliasMap : undefined,
    aliasShow
  }
}
