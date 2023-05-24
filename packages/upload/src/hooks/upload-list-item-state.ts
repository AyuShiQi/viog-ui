// vue
import { computed, ref, inject } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  const { file } = props
  // DOM ref
  // ref
  const res = /\..+$/.test(file.name)
  const format = res ? file.name.split('.').pop().toLowerCase() : 'default'
  const sizeString = computed(() => {
    let size = file.size / 1024
    if (size < 1024) return `${size.toFixed(2)}KB`
    else {
      size /= 1024
      if (size < 1024) return `${size.toFixed(2)}MB`
      else return `${(size / 1024).toFixed(2)}MB`
    }
  })
  // reactive
  // inject
  const toDelete = inject('upload-delete-file', undefined) as ((file: File) => void) | undefined
  // computed
  // 事件方法
  function handleDelete () {
    if (toDelete) toDelete(file as File)
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    format,
    sizeString,
    handleDelete
  }
}
