// vue
import { inject } from 'vue'
// vue type
import type { Ref } from 'vue'
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
  const toClose = inject('editor-table-option-list-close') as () => void
  const listTop = inject('editor-table-option-list-top') as Ref<number>
  const listLeft = inject('editor-table-option-list-left') as Ref<number>

  const deleteValue = inject('editor-table-delete-value') as () => void
  const copyValue = inject('editor-table-copy-value') as () => void
  const pasteValue = inject('editor-table-paste-value') as () => void
  const insertLine = inject('editor-table-insert-line') as () => void
  const sortByOrder = inject('editor-table-sort-by-order') as () => void
  const sortByDesc = inject('editor-table-sort-by-desc') as () => void
  // computed
  // 事件方法
  function toDelete () {
    deleteValue()
    toClose()
  }

  function toCopy () {
    copyValue()
    toClose()
  }

  function toPaste () {
    pasteValue()
    toClose()
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    listTop,
    listLeft,
    toDelete,
    toCopy,
    toPaste
  }
}
