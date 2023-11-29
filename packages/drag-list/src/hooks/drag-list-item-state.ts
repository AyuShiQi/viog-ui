// vue
import { ref, inject, onMounted } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  let my = 0
  let prei = props.index - 1
  let nexti = props.index + 1
  let preOffset = 0
  // DOM ref
  // ref
  const dragItem = ref()
  const isDrag = ref(false)
  const offset = ref(0)
  // reactive
  // inject
  const infoPick = inject('drag-list-info-pick', undefined) as any
  const list = inject('drag-list-info-list', undefined) as any
  // computed
  // 事件方法
  function handleMousemove (e: MouseEvent) {
    if (!isDrag.value) return
    // console.log(e.clientY - my, e.clientY, my)
    if (typeof props.index === 'number') {
      offset.value = e.clientY - my
      // 1 向下拖动，0向下拖动
      const dirc = offset.value - preOffset > 0 ? 1 : 0
      const info = list[props.index]
      const preinfo = list[Math.max(prei, 0)]
      const nextinfo = list[Math.min(nexti, list.length - 1)]
      const nowTop = info.top + offset.value
      // console.log(dirc)
      if (dirc === 0 && nowTop < preinfo.height + preinfo.top) {
        if (props.index === prei || prei < 0) return
        preinfo.changeOffset(info.height + 8)
        prei--
        nexti--
      } else if (dirc === 1 && nowTop + info.height + 8 > nextinfo.top) {
        if (props.index === prei || nexti >= list.length) return
        if (props.index === nexti) return
        nextinfo.changeOffset(-(info.height + 8))
        prei++
        nexti++
      }
      preOffset = offset.value
    }
  }

  function handleMousedown (e: MouseEvent) {
    isDrag.value = true
    my = e.clientY
  }

  function handleMouseup () {
    isDrag.value = false
    // 全部还原
    offset.value = 0
    // 否则更新list
  }

  function changeOffset (of: number) {
    offset.value += of
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    if (infoPick) {
      infoPick(props.index, {
        top: dragItem.value.offsetTop,
        height: dragItem.value.offsetHeight,
        node: dragItem.value,
        changeOffset
      })
    }
    // 收集其长宽高
    console.log(dragItem.value.offsetHeight, dragItem.value.offsetTop)
  })
  return {
    offset,
    dragItem,
    isDrag,
    handleMousedown,
    handleMousemove,
    handleMouseup
  }
}
