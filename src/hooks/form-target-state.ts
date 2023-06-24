// vue
import { inject, watch, toRaw } from 'vue'
// vue type
import type { Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export function formTargetStateRef (name: string, value: Ref) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  const formItemUpdateMap = inject('form-item-update-map', undefined) as ((name: string, value: any) => void) | undefined
  // computed
  watch(value, () => {
    if (formItemUpdateMap) formItemUpdateMap(name, toRaw(value.value))
  }, { immediate: true })
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
}

export function formTargetStateReactive (name: string, value: any) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  const formItemUpdateMap = inject('form-item-update-map', undefined) as ((name: string, value: any) => void) | undefined
  // computed
  watch(value, () => {
    if (formItemUpdateMap) formItemUpdateMap(name, toRaw(value))
  }, { immediate: true })
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
}
