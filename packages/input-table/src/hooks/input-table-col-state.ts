// vue
import { inject } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  const id = (inject('vi-input-table-id-getter', () => 0) as () => number)()
  const idCollector = inject('vi-input-table-id-collector', undefined) as ((t: number) => void) | undefined
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  if (idCollector) idCollector(id)
}
