// vue
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
import openState from '@/hooks/open-state'
import boxPositionState from '@/hooks/box-position-state'
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  const open = openState(false, props.trigger)
  const boxPosition = boxPositionState(props.direction)
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    ...open,
    ...boxPosition
  }
}
