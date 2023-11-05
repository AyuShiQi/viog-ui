// vue
import { computed } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import { formTargetStateReactive } from '@/hooks/form-target-state'

export default function (props: any) {
  formTargetStateReactive(props.name, props.modelValue)
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  const needPlaceholder = computed(() => !props.modelValue || props.modelValue.length === 0)
  const resultView = computed(() => needPlaceholder.value ? props.placeholder : props.modelValue.join(props.separator))
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    needPlaceholder,
    resultView
  }
}
