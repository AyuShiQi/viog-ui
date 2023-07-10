// vue
import { ref, provide, computed } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import idG from '../../../utils/communication/IdDistributor'

export default function (props: any) {
  // 普通常量
  const idGetter = idG()
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  const choose = computed(() => {
    return props.modelValue
  })
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  provide('vi-steps-id-getter', idGetter)
  provide('vi-steps-step', choose)
  // 生命周期
  return {
    choose
  }
}
