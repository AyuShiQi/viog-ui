// vue
import { inject } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  const fileList = inject('upload-file-list', []) as File[]
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期

  return {
    fileList
  }
}
