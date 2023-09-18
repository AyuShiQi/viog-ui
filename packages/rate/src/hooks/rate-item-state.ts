// vue
import { inject, computed } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  const id = inject('vi-rate-id-getter', () => 0)() as number
  // DOM ref
  // ref
  // reactive
  // inject
  const nowPick = inject('vi-rate-now-pick', undefined) as any
  const changePick = inject('vi-rate-change-pick', undefined) as any
  // computed
  const endColor = computed(() => {
    if (nowPick && nowPick.value >= id) return 100
    else return 0
  })
  // 事件方法
  function handleMousemove () {
    if (changePick) changePick(id)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    handleMousemove,
    endColor
  }
}
