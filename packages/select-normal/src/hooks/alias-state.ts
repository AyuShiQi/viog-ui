// vue
import { provide, reactive } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (useAlias = true) {
  // 普通常量
  const aliasMap = reactive(new Map<string, string>())
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  /**
   * 返回某个value的别名，没有别名则返回value
   * @param value 选中value
   * @returns 别名
   */
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
