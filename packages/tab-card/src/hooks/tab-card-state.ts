// vue
import { computed, inject } from 'vue'
// vue type
import type { ComputedRef, SetupContext } from 'vue'
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
  const pickId = inject('vi-tab-card-group-pick-id') as ((id: any) => void) | undefined
  const deleteId = inject('vi-tab-card-group-delete-id') as ((id: any) => void) | undefined
  const pick = inject('vi-tab-card-group-pick') as ComputedRef<any>
  // computed
  const isChoosed = computed(() => {
    return Object.is(pick.value, props.value)
  })
  // 事件方法
  function handleClick () {
    if (pickId) pickId(props.value)
  }

  function handleDelete (e: Event) {
    e.stopPropagation()
    if (deleteId) deleteId(props.value)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    isChoosed,
    handleClick,
    handleDelete
  }
}
