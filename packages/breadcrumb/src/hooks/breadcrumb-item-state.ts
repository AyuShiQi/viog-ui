// vue
import { computed, inject } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
import type { ToPick, Color } from '../types/breadcrumb'
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  const superColor = inject('breadcrumb-color', undefined) as Color
  const toPick = inject('breadcrumb-to-pick', undefined) as ToPick
  const separator = inject('breadcrumb-separator', '/')
  // computed
  /**
   * 当前面包屑的颜色
   */
  const curColor = computed<string>(() => {
    return props.color ? props.color : superColor!
  })
  // 事件方法
  /**
   * 处理breadcrumb-item组件click事件
   */
  function handleClick (): void {
    if (toPick) toPick(props.to, props.replace)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    curColor,
    separator,
    handleClick
  }
}
