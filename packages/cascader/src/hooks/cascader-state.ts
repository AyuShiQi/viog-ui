// vue
import { reactive, onUpdated } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  // DOM ref
  const choose = reactive({
    pick: props.modelValue ?? [],
    options: props.options
  })
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onUpdated(() => {
    if (props.modelValue !== undefined) choose.pick = props.modelValue
    if (props.options !== undefined) choose.options = props.options
  })
  return {
    choose
  }
}
