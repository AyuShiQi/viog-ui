// vue
import { inject } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function () {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // 用于触发打开input file框
  const toChooseFile = inject('upload-choose-file', undefined) as (() => void) | undefined
  // computed
  // 事件方法
  function handleClick () {
    if (toChooseFile) toChooseFile()
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    handleClick
  }
}
