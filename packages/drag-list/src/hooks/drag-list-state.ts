// vue
import { ref, provide } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  const list = [] as any[]
  // DOM ref
  // ref
  const isDrag = ref(false)
  const maskTop = ref(0)
  const maskHeight = ref(0)
  // reactive
  // const
  // inject
  // computed
  // 事件方法
  function handleDrag (drag: boolean) {
    isDrag.value = drag
  }
  // 方法
  // 普通function函数
  function infoPick (index: number, value: any) {
    list[index] = value
  }

  function changeList (sourcei: number, targeti: number) {
    // 重置offset
    for (let i = 0; i < list.length; i++) {
      list[i].changeOffset(0, false)
    }
    if (sourcei !== targeti) {
      const source = props.modelValue[sourcei]
      props.modelValue.splice(sourcei, 1)
      if (sourcei > targeti) props.modelValue.splice(targeti, 0, source)
      // 这个是因为在取出source后，坐标发生了改变
      else props.modelValue.splice(targeti - 1, 0, source)
    }
  }

  function deleteList (index: number) {
    list.length = index
  }

  function updateMaskTop (top: number, height?: number) {
    maskTop.value = top
    if (height) maskHeight.value = height
  }
  // provide
  provide('drag-list-info-pick', infoPick)
  provide('drag-list-info-list', list)
  provide('drag-list-change-list', changeList)
  provide('drag-list-delete-list', deleteList)
  // 生命周期
  return {
    isDrag,
    maskTop,
    maskHeight,
    handleDrag,
    updateMaskTop
  }
}
