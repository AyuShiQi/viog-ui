// vue
import { inject, computed } from 'vue'
// vue type
import type { Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  const idGetter = inject('vi-steps-id-getter', undefined) as (() => number) | undefined
  const id = idGetter ? idGetter() : 0
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  const step = inject('vi-steps-step', undefined) as Ref<number> | undefined
  // computed
  const choosed = computed(() => {
    return id <= (step ? step.value : -1)
  })
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    id,
    step,
    choosed
  }
}
