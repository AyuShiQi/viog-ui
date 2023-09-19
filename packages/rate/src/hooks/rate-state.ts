// vue
import { type SetupContext, provide, computed } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import idGetter from '../../../utils/communication/IdDistributor'

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  const nowPick = computed(() => {
    return props.modelValue
  })
  // 事件方法
  // 方法
  // 普通function函数
  function changePick (goal: number) {
    // nowPick.value = goal
    ctx.emit('update:modelValue', goal)
  }
  // provide
  provide('vi-rate-id-getter', idGetter())
  provide('vi-rate-now-pick', nowPick)
  provide('vi-rate-change-pick', changePick)
  provide('vi-rate-trigger', props.trigger)
  provide('vi-rate-mode', props.mode)
  // 生命周期
  return {
    changePick
  }
}
