// vue
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
import openState from '@/hooks/open-state'
import boxPositionState from '@/hooks/box-position-state'
// 内部hooks
// 外部模块

export default function (props: any) {
  const open = openState(true, props.trigger)
  // const boxPosition = boxPositionState(props.direction)
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  function handleMouseover (): void {
    if (props.trigger === 'hover') open.toOpen()
  }
  function handleMouseleave (): void {
    if (props.trigger === 'hover') open.toClose()
  }
  function handleClick (): void {
    if (props.trigger === 'click') open.toSelect()
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    handleMouseover,
    handleMouseleave,
    handleClick,
    ...open
    // ...boxPosition
  }
}
