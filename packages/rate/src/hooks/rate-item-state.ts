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
  const trigger = inject('vi-rate-trigger', 'hover') as 'hover' | 'click'
  const mode = inject('vi-rate-mode', 'total') as 'total' | 'half' | 'free'
  // computed
  const endColor = computed(() => {
    if (nowPick && nowPick.value > id + 1) return 100
    else if (nowPick && nowPick.value > id && nowPick.value <= id + 1) {
      switch (mode) {
        case 'total':
          return 100
        case 'half':
          return nowPick.value - id > 0.5 ? 100 : 50
        case 'free':
          return (nowPick.value - id) * 100
        default:
          return 0
      }
    } else return 0
  })
  // 事件方法
  function handleMousemove (e: MouseEvent) {
    if (trigger === 'hover') handleGoalChange(e)
  }

  function hanldeClick (e: MouseEvent) {
    if (trigger === 'click') handleGoalChange(e)
  }
  // 方法
  function handleGoalChange (e: any) {
    let left
    let width
    if (changePick) {
      switch (mode) {
        case 'total':
          changePick(id + 1)
          break
        case 'half':
          ({ left, width } = e.target!.getBoundingClientRect())
          if (e.x - left >= width / 2) changePick(id + 1)
          else changePick(id + 0.5)
          break
        case 'free':
          ({ left, width } = e.target!.getBoundingClientRect())
          changePick(id + (e.x - left) / width)
          break
      }
    }
  }
  // 普通function函数
  // provide
  // 生命周期
  return {
    handleMousemove,
    hanldeClick,
    endColor
  }
}
