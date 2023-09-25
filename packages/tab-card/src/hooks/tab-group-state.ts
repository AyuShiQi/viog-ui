// vue
import { ref, provide, computed } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  const pick = computed(() => props.modelValue)
  // 事件方法
  // 方法
  // 普通function函数
  function pickId (val: any) {
    ctx.emit('update:modelValue', val)
  }

  function deleteId (val: any) {
    ctx.emit('delete', val)
  }
  // provide
  provide('vi-tab-card-group-pick-id', pickId)
  provide('vi-tab-card-group-delete-id', deleteId)
  provide('vi-tab-card-group-pick', pick)
  // 生命周期
  return {
  }
}
