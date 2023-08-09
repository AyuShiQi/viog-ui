// vue
import { reactive, computed, watch, ref } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
import boxSizeState from './box-size-state'
import scrollState from './scroll-state'
import tableValueState from './table-value-state'
import pickBoxState from './pick-box-state'
import contextMenuState from './context-menu-state'
// 外部模块

// 横向标头生成
const headerMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

/**
 * table-editor 组件的hooks入口文件，包括表格基础数据的处理
 * @param props props
 * @param ctx crx
 */
export default function (props: any, ctx: SetupContext) {
  // 特殊处理
  /**
   * 表格的输入内容
   */
  const originValue = reactive(props.modelValue ? props.modelValue : [])
  const value = reactive([] as any[])
  // 普通常量
  // DOM ref
  /**
   * table所在的DOM
   */
  const table = ref()
  // ref
  // reactive
  /**
   * sider标头
   */
  const sideList = reactive([] as number[])
  /**
   * header标头
   */
  const headerList = reactive([] as string[])
  // inject
  // computed
  /**
   * 当前行数
   */
  const rows = computed(() => {
    return Math.max(value.length, props.defaultRow)
  })
  /**
   * 当前列数
   */
  const cols = computed(() => {
    let max = 0
    for (const arr of value) {
      max = Math.max(arr.length, max)
    }
    return Math.max(max, props.defaultCol)
  })

  // watch
  /**
   * 行数监视
   */
  watch(rows, (newVal, oldVal) => {
    // 行数填充
    if (!oldVal) oldVal = 0
    while (value.length < newVal) {
      value.push(new Array(cols.value))
    }
    generateSider(newVal, oldVal)
  }, { immediate: true })
  /**
   * 行数监视
   */
  watch(cols, (newVal, oldVal) => {
    // 列数填充
    if (!oldVal) oldVal = 0
    for (const row of value) {
      row.length = newVal
    }
    generateHeader(newVal, oldVal)
  }, { immediate: true })
  /**
   * 操作数组监控
   */
  watch(value, () => {
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value[i].length; j++) {
        // 此处证明需要填充原数组
        if (value[i][j]) {
          // 填充行数
          while (originValue.length < i + 1) {
            originValue.push([])
          }
          // 寻找列数
          originValue[i][j] = value[i][j]
        }
      }
      // 清除多余列数据
      if (originValue[i] && originValue[i].length > value[i].length) originValue[i].length = value[i].length
    }
    // 清除多余行
    if (originValue.length > value.length) originValue.length = value.length
  })
  /**
   * 原数组监控
   */
  watch(originValue, () => {
    for (let i = 0; i < originValue.length; i++) {
      for (let j = 0; j < originValue[i].length; j++) {
        // 填充行数
        while (value.length < i + 1) {
          value.push([])
        }
        // 寻找列数
        value[i][j] = originValue[i][j]
      }
      // 多余的行数据清除
      for (let j = originValue[i].length; j < value[i].length; j++) {
        value[i][j] = undefined
      }
    }

    // 操作数据数组多余的行清除
    for (let i = originValue.length; i < value.length; i++) {
      for (let j = 0; j < value[i].length; j++) {
        value[i][j] = undefined
      }
    }
  }, { immediate: true })
  // 事件方法
  // 方法
  // 普通function函数
  /**
   * 动态生成side标头
   * @param newVal 新行数
   * @param oldVal 老行数
   */
  function generateSider (newVal: number, oldVal: number) {
    if (newVal < oldVal) sideList.length = newVal
    else {
      for (let i = oldVal + 1; i <= newVal; i++) {
        sideList.push(i)
      }
    }
  }

  /**
   * 动态生成字母表头
   * @param newVal 新列数
   * @param oldVal 老列数
   */
  function generateHeader (newVal: number, oldVal: number) {
    // console.log(newVal, oldVal)
    if (newVal < oldVal) headerList.length = newVal
    // 先生成到最新的表头
    else {
      let step = 1
      let preCount = 26
      let nowCount = preCount
      while (nowCount <= oldVal) {
        preCount *= 26
        nowCount += preCount
        step++
      }
      let now = oldVal + 1
      while (now !== -1) {
        now = addHeader(step, oldVal + 1, newVal, now, '')
        step++
      }
    }
  }

  /**
   * 生成字母表头，是上一个函数的dfs算法
   * @param step 当前阶数 指当前now标头是一个字母还是两个字母还是n个字母
   * @param start 开始生成的起始序号
   * @param end 结束序号
   * @param now 当前需生成的序号
   * @param title 目前已生成的title，懂吧dfs
   * @returns 返回下一次需要生成的字母序号，如果生成完毕返回-1
   */
  function addHeader (step: number, start: number, end: number, now: number, title: string): number {
    // 加入list
    if (step === 0) {
      headerList.push(title)
      return now === end ? -1 : now + 1
    }
    if (step === 1) {
      // 开始真正生成
      for (let i = now - 1; i < 26; i++) {
        // if (now + i < start) continue
        now = addHeader(step - 1, start, end, now, title + headerMap[i])
        if (now === -1) return -1
      }
      return now
    }

    const nowCount = Math.pow(26, step - 1)
    for (let i = 0; i < 26; i++) {
      const pre = (i + 1) * nowCount
      if (pre + nowCount < start) continue
      now = addHeader(step - 1, start - pre, end - pre, now - pre, title + headerMap[i])
      if (now === -1) return -1
      now += pre
    }
    return now
  }
  // provide
  // 生命周期

  const tableValue = tableValueState(props, ctx, value)
  const boxSize = boxSizeState(table, value)
  const pickBox = pickBoxState(props, ctx, boxSize, tableValue.chooseTarget, value)
  const contextMenu = contextMenuState(props, ctx, tableValue.chooseTarget, pickBox.pickTarget, tableValue.entireTarget, value, table)
  const scroll = scrollState(table, pickBox.needPick, pickBox.needChange, boxSize)

  return {
    value,
    table,
    rows,
    cols,
    sideList,
    headerList,
    ...boxSize,
    ...scroll,
    ...tableValue,
    ...pickBox,
    ...contextMenu
  }
}
