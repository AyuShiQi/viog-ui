// vue
import { reactive, computed, watch } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
import scrollState from './scroll-state'
import tableValueState from './table-value-state'
import pickBoxState from './pick-box-state'
// 外部模块

// 横向标头生成
const headerMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function (props: any, ctx: SetupContext) {
  // 特殊处理
  const value = reactive(props.modelValue)
  const scroll = scrollState(props, ctx)
  const tableValue = tableValueState(props, ctx, value)
  const pickBox = pickBoxState(props, ctx, tableValue.chooseTarget, value)
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // header标头
  const sideList = reactive([] as number[])
  const headerList = reactive([] as string[])
  // inject
  // computed
  const rows = computed(() => {
    return Math.max(props.modelValue.length, 10)
  })
  const cols = computed(() => {
    let max = 0
    for (const arr of props.modelValue) {
      max = Math.max(arr.length, max)
    }
    return Math.max(max, 10)
  })

  // watch
  // 行数监视
  watch(rows, (newVal, oldVal) => {
    // 行数填充
    if (!oldVal) oldVal = 0
    while (props.modelValue.length < newVal) {
      props.modelValue.push(new Array(cols.value))
    }
    generateSider(newVal, oldVal)
  }, { immediate: true })
  // 列数监视
  watch(cols, (newVal, oldVal) => {
    // 列数填充
    if (!oldVal) oldVal = 0
    for (const row of props.modelValue) {
      row.length = newVal
    }
    generateHeader(newVal, oldVal)
  }, { immediate: true })

  // 事件方法
  // 方法
  // 普通function函数
  function generateSider (newVal: number, oldVal: number) {
    if (newVal < oldVal) sideList.length = newVal
    else {
      for (let i = oldVal + 1; i <= newVal; i++) {
        sideList.push(i)
      }
    }
  }

  // 生成字母表头
  function generateHeader (newVal: number, oldVal: number) {
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

  // -1已完成
  function addHeader (step: number, start: number, end: number, now: number, title: string): number {
    // 加入list
    if (step === 0) {
      headerList.push(title)
      return now === end ? -1 : now + 1
    }
    if (step === 1) {
      // 开始真正生成
      for (let i = 0; i < 26; i++) {
        if (now + i < start) continue
        now = addHeader(step - 1, start, end, now, title + headerMap[i])
        if (now === -1) return -1
      }
      return now
    }

    const nowCount = Math.pow(26, step - 1)
    for (let i = 0; i < 26; i++) {
      const pre = i * nowCount
      if (pre + nowCount < start) continue
      now = addHeader(step - 1, start - pre, end - pre, now - pre, title + headerMap[i])
      if (now === -1) return -1
      now += pre
    }
    return now
  }
  // provide
  // 生命周期

  return {
    value,
    rows,
    cols,
    sideList,
    headerList,
    ...scroll,
    ...tableValue,
    ...pickBox
  }
}
