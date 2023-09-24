// vue
import { computed, inject } from 'vue'
// vue type
import type { Ref } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  const id = (inject('vi-tab-card-group-id-getter', () => 0) as () => number)()
  // DOM ref
  // ref
  // reactive
  // inject
  const idCollector = inject('vi-tab-card-group-id-collector') as ((id: number) => void) | undefined
  const pickId = inject('vi-tab-card-group-pick-id') as ((id: number) => void) | undefined
  const deleteId = inject('vi-tab-card-group-delete-id') as ((id: number) => void) | undefined
  const pick = inject('vi-tab-card-group-pick') as Ref<number>
  // computed
  const isChoosed = computed(() => {
    return pick.value === id
  })
  // 事件方法
  function handleClick () {
    if (pickId) pickId(id)
  }

  function handleDelete (e: Event) {
    e.stopPropagation()
    if (deleteId) deleteId(id)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  if (idCollector) {
    idCollector(id)
  }
  return {
    isChoosed,
    handleClick,
    handleDelete
  }
}
