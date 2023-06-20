// vue
import { inject, computed } from 'vue'
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

  const mode = inject('editor-table-option-mode') as Ref<string>
  const deleteValue = inject('editor-table-delete-value') as () => void
  const copyValue = inject('editor-table-copy-value') as () => void
  const pasteValue = inject('editor-table-paste-value') as () => void
  const insertLine = inject('editor-table-insert-line') as (type: 0 | 1) => void
  const sortByOrder = inject('editor-table-sort-by-order') as () => void
  const sortByDesc = inject('editor-table-sort-by-desc') as () => void
  // computed
  /**
   * 是否展示针对行列的操作
   */
  const showLine = computed(() => mode.value !== 'content')
  /**
   * 是否展示针对列的操作
   */
  const showCol = computed(() => mode.value === 'col')
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

  function toCut () {
    copyValue()
    deleteValue()
    toClose()
  }

  // 0 代表左侧或上方，1代表右侧或下方
  function toInsert (type: 0 | 1) {
    insertLine(type)
    toClose()
  }

  function toSort (type: 0 | 1) {
    type === 0 ? sortByOrder() : sortByDesc()
    toClose()
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    mode,
    listTop,
    listLeft,
    showLine,
    showCol,
    toCut,
    toDelete,
    toCopy,
    toPaste,
    toInsert,
    toSort
  }
}
