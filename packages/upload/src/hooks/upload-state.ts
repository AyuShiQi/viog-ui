// vue
import { ref } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  // DOM ref
  const fileUploaderInput = ref()
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  function handleClick () {
    fileUploaderInput.value.click()
  }
  // 普通function函数
  // provide
  // 生命周期

  return {
    fileUploaderInput,
    handleClick
  }
}
