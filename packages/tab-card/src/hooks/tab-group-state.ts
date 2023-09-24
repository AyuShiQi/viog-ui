// vue
import { ref, provide } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
import idCollectorState from '@/hooks/id-collector-state'
// 内部hooks
// 外部模块
import idGetter from '../../../utils/communication/IdDistributor'

export default function (props: any, ctx: SetupContext) {
  const idCollector = idCollectorState(-1, 'vi-tab-card-group')
  // 普通常量
  // DOM ref
  // ref
  const pick = ref(-1)
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  function pickId (id: number) {
    pick.value = id
    ctx.emit('pick', id)
  }

  function deleteId (id: number) {
    ctx.emit('delete', id)
  }
  // provide
  provide('vi-tab-card-group-id-getter', idGetter())
  provide('vi-tab-card-group-pick-id', pickId)
  provide('vi-tab-card-group-delete-id', deleteId)
  provide('vi-tab-card-group-pick', pick)
  // 生命周期
  return {
    ...idCollector
  }
}
