// vue
import { useSlots, inject } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  const alias = init()
  // DOM ref
  // ref
  // reactive
  // inject
  const aliasMap = inject('select-alias-map') as Map<any, any>
  // 向select添加别名映射
  aliasMap.set(props.value, alias)
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  function init () {
    const defaultSlot = useSlots().default
    if (defaultSlot) {
      const val = useSlots()?.default!()[0].children
      if (val && typeof val === 'string') return val
    }
    return props.value
  }
  // provide
  // 生命周期
}
