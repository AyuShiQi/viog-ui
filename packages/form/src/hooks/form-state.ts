// vue
import { ref, provide, SetupContext } from 'vue'
// vue type
// 组件type
import type { ResArray } from '../type/form'
// 外部hooks
// 内部hooks
// 外部模块

export default function (ctx: SetupContext) {
  // 普通常量
  const formSet = new Set<() => ResArray>()
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  function collectFormSet (fn: () => ResArray) {
    formSet.add(fn)
  }

  function submit () {
    let r = true
    const formMap = new Map<string, any>()
    for (const fn of formSet) {
      const [name, value, res] = fn()
      formMap.set(name, value)
      r &&= res
    }
    ctx.emit('submit', formMap, r)
  }
  // 普通function函数
  // provide
  provide('form-collect-form-set', collectFormSet)
  // 生命周期
  return {
    submit
  }
}
