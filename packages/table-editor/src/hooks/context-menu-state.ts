// vue
import { ref, provide, inject, onMounted, onBeforeMount } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
import type { Target, PickTarget } from '../types/inject-type'
// 外部hooks
import openState from '@/hooks/open-state'
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext, chooseTarget: Target, pickTarget: PickTarget, entireTarget: Target, value: any[][]) {
  const open = openState(true, 'mousedown')
  // 普通常量
  let mode = 'content'
  const clipboard = navigator.clipboard
  // DOM ref
  // ref
  const listTop = ref(0)
  const listLeft = ref(0)
  // reactive
  // inject
  // computed
  // 事件方法
  function handleOpenContextMenu (e: MouseEvent, mod: 'row' | 'col' | 'content' = 'content') {
    mode = mod
    listTop.value = e.y
    listLeft.value = e.x
    open.open.value = true
    e.preventDefault()
  }
  // 方法
  function closeOptionList () {
    open.toClose()
  }
  // list组方法
  function deleteValue () {
    if (mode === 'content') {
      for (let i = pickTarget.rowStart; i <= pickTarget.rowEnd; i++) {
        for (let j = pickTarget.colStart; j <= pickTarget.colEnd; j++) {
          value[i][j] = undefined
        }
      }
    } else if (mode === 'row') {
      const row = entireTarget[0]
      value.splice(row, 1)
    } else if (mode === 'col') {
      const col = entireTarget[1]
      for (const row of value) {
        row.splice(col, 1)
      }
    }
  }

  function copyValue () {
    const copyArr: string[] = []
    if (mode === 'content') {
      for (let i = pickTarget.rowStart; i <= pickTarget.rowEnd; i++) {
        copyArr.push(value[i].slice(pickTarget.colStart, pickTarget.colEnd + 1).join('\t'))
      }
    } else if (mode === 'row') {
      const row = entireTarget[0]
      copyArr.push(value[row].join('\t'))
    } else if (mode === 'col') {
      const col = entireTarget[1]
      for (const row of value) {
        copyArr.push(row[col])
      }
    }
    clipboard.writeText(copyArr.join('\n'))
    console.log(copyArr.join('\n'))
  }

  function pasteValue () {
    clipboard.readText().then((val) => {
      if (!val) return
      if (chooseTarget[0] === -1 || chooseTarget[1] === -1) return
      const rowArr = val.split('\n')
      let i = chooseTarget[0]
      for (const row of rowArr) {
        let j = chooseTarget[1]
        const items = row.split('\t')
        for (const item of items) {
          value[i][j++] = item
        }
        i++
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  function insertLine (mode: 'row' | 'col', type: 0 | 1) {
    console.log('1')
  }

  function sortByOrder () {
    console.log('1')
  }

  function sortByDesc () {
    console.log('1')
  }
  // 普通function函数
  // provide
  provide('editor-table-option-list-close', open.toClose)
  provide('editor-table-option-list-top', listTop)
  provide('editor-table-option-list-left', listLeft)
  provide('editor-table-delete-value', deleteValue)
  provide('editor-table-copy-value', copyValue)
  provide('editor-table-paste-value', pasteValue)
  provide('editor-table-insert-line', insertLine)
  provide('editor-table-sort-by-order', sortByOrder)
  provide('editor-table-sort-by-desc', sortByDesc)
  // 生命周期
  onMounted(() => {
    window.addEventListener('scroll', closeOptionList)
  })

  onBeforeMount(() => {
    window.removeEventListener('scroll', closeOptionList)
  })

  return {
    ...open,
    listTop,
    listLeft,
    handleOpenContextMenu
  }
}
