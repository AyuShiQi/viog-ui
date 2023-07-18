// vue
import { ref, provide } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import IdDistributor from '../../../utils/communication/IdDistributor'

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  const nowPick = ref(-1)
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  function toPick (id: number) {
    nowPick.value = id
    ctx.emit('pick', id)
  }
  // 普通function函数
  // provide
  provide('tabbar-id', IdDistributor()) // id分发器
  provide('tabbar-to-pick', toPick) // 去选择
  provide('tabbar-now-pick', nowPick) // 当前选择
  // 生命周期
  return {
    nowPick
  }
}
