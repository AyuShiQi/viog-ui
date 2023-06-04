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
  const mode = ref('content')
  const clipboard = navigator.clipboard
  const optionListSize = {
    width: 0,
    height: 0
  }
  // DOM ref
  // ref
  const listTop = ref(0)
  const listLeft = ref(0)
  // reactive
  // inject
  // computed
  // 事件方法
  function handleOpenContextMenu (e: MouseEvent, mod: 'row' | 'col' | 'content' = 'content') {
    mode.value = mod
    open.open.value = true
    changeListPosition(e.x, e.y)
    e.preventDefault()
  }
  // 方法
  // 位置信息组
  function changeListPosition (mx: number, my: number) {
    const { innerHeight, innerWidth } = window
    if (mx + optionListSize.width <= innerWidth) listLeft.value = mx
    // 做处理
    else {
      const now = innerWidth - optionListSize.width
      listLeft.value = now >= 0 ? now : mx
    }

    if (my + optionListSize.height <= innerHeight) listTop.value = my
    // 做处理
    else {
      const now = innerHeight - optionListSize.height
      listTop.value = now >= 0 ? now : my
    }
  }

  function closeOptionList () {
    open.toClose()
  }
  // list组方法
  function deleteValue () {
    if (mode.value === 'content') {
      for (let i = pickTarget.rowStart; i <= pickTarget.rowEnd; i++) {
        for (let j = pickTarget.colStart; j <= pickTarget.colEnd; j++) {
          value[i][j] = undefined
        }
      }
    } else if (mode.value === 'row') {
      const row = entireTarget[0]
      value.splice(row, 1)
    } else if (mode.value === 'col') {
      const col = entireTarget[1]
      for (const row of value) {
        row.splice(col, 1)
      }
    }
  }

  function copyValue () {
    const copyArr: string[] = []
    if (mode.value === 'content') {
      for (let i = pickTarget.rowStart; i <= pickTarget.rowEnd; i++) {
        copyArr.push(value[i].slice(pickTarget.colStart, pickTarget.colEnd + 1).join('\t'))
      }
    } else if (mode.value === 'row') {
      const row = entireTarget[0]
      copyArr.push(value[row].join('\t'))
    } else if (mode.value === 'col') {
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

  function insertLine (type: 0 | 1) {
    if (mode.value === 'row') {
      const now = entireTarget[0]
      value.splice(type === 0 ? now : now + 1, 0, new Array(value[0] ? value[0].length : 0))
    } else {
      const now = entireTarget[1]
      for (const row of value) {
        row.splice(type === 0 ? now : now + 1, 0, undefined)
      }
    }
  }

  function sortByOrder () {
    const now = entireTarget[1]
    value.sort((a, b) => {
      const ra = a[now]
      const rb = b[now]
      if (ra === '' || ra === undefined) return 1
      if (rb === '' || rb === undefined) return -1
      const aIsNum = !isNaN(Number(ra))
      const bIsNum = !isNaN(Number(rb))
      if (aIsNum && bIsNum) return Number(ra) - Number(rb)
      else if (aIsNum) return 1
      else if (bIsNum) return -1
      else return String(ra).localeCompare(String(rb))
    })
  }

  function sortByDesc () {
    const now = entireTarget[1]
    value.sort((a, b) => {
      const ra = a[now]
      const rb = b[now]
      if (ra === '' || ra === undefined) return 1
      if (rb === '' || rb === undefined) return -1
      const aIsNum = !isNaN(Number(ra))
      const bIsNum = !isNaN(Number(rb))
      if (aIsNum && bIsNum) return Number(rb) - Number(ra)
      else if (aIsNum) return 1
      else if (bIsNum) return -1
      else return -String(ra).localeCompare(String(rb))
    })
  }
  // 普通function函数
  function getSize () {
    const styles = getComputedStyle(open.openDOM.value.$el)
    const width = styles.getPropertyValue('width')
    const height = styles.getPropertyValue('height')
    if (/px$/.test(width)) optionListSize.width = Number(width.slice(0, -2))
    if (/px$/.test(height)) optionListSize.height = Number(height.slice(0, -2))
  }
  // provide
  provide('editor-table-option-list-close', open.toClose)
  provide('editor-table-option-list-top', listTop)
  provide('editor-table-option-list-left', listLeft)
  provide('editor-table-option-mode', mode)
  provide('editor-table-delete-value', deleteValue)
  provide('editor-table-copy-value', copyValue)
  provide('editor-table-paste-value', pasteValue)
  provide('editor-table-insert-line', insertLine)
  provide('editor-table-sort-by-order', sortByOrder)
  provide('editor-table-sort-by-desc', sortByDesc)
  // 生命周期
  onMounted(() => {
    window.addEventListener('scroll', closeOptionList)
    getSize()
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
