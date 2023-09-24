// vue
import { ref, inject, computed } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  const inputDOM = ref()
  // ref
  const editShow = ref(false)
  const viewValue = ref(props.value)
  // reactive
  // inject
  const editValue = inject('vi-input-table-editor') as (val: any, i: number, j: number) => void
  // computed
  computed(() => (viewValue.value = props.value))
  // 事件方法
  function handleClick () {
    editShow.value = true
    setTimeout(() => inputDOM.value.focus())
  }

  function handleBlur () {
    editShow.value = false
    if (editValue) editValue(viewValue.value, props.i, props.j)
  }

  function handleInput (e: any) {
    viewValue.value = e.target.innerText
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    inputDOM,
    viewValue,
    editShow,
    handleClick,
    // handleFocus,
    handleBlur,
    handleInput
  }
}
