// vue
import { ref, inject, computed, watch, onMounted, onBeforeUnmount } from 'vue'
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
  let nowHeight = 0
  // DOM ref
  // ref
  const dragItem = ref()
  const isDrag = ref(false)
  const offset = ref(0)
  // reactive
  // inject
  const changeList = inject('drag-list-change-list', undefined) as any
  const deleteList = inject('drag-list-delete-list', undefined) as any
  const infoPick = inject('drag-list-info-pick', undefined) as any
  const list = inject('drag-list-info-list', undefined) as any
  // computed
  const index = computed(() => props.index)
  watch(index, () => {
    prei = index.value - 1
    nexti = index.value + 1
    setTimeout(() => {
      infoPick(index.value, {
        top: dragItem.value.offsetTop,
        height: dragItem.value.offsetHeight,
        node: dragItem.value,
        changeOffset
      })
    }, 0)
  })
  // 事件方法
  function handleMousemove (e: MouseEvent) {
    if (!isDrag.value) return
    // console.log(e.clientY - my, e.clientY, my)
    if (typeof props.index === 'number') {
      // 当前drag的盒子信息
      const info = list[props.index]
      // 计算盒子高度
      const end = list[list.length - 1].top + list[list.length - 1].height
      // 当前偏移量目测
      offset.value = e.clientY - my
      dragEdge(info, end)
      // 目标是前进还是后退，1 向下拖动，0向上拖动(稍微控制一下移动距离)
      if (Math.abs(offset.value - preOffset) <= 2) return
      const dirc = offset.value - preOffset > 0 ? 1 : 0
      const nowTop = info.top + offset.value
      // console.log(dirc, prei, nexti)
      // 前进，则与prei作比较
      if (dirc === 0) {
        // 如果已经没有前置节点，就退出判断
        if (prei < 0) return
        const preinfo = list[prei]
        // prei是大于index的，说明prei的节点是前进过的节点
        const preTop = prei > props.index ? preinfo.top - nowHeight : preinfo.top
        if (preTop + preinfo.height / 2 > nowTop) {
          preinfo.changeOffset(nowHeight)
          nexti = prei
          do { prei-- } while (prei === props.index)
          ctx.emit('updatemask', list[nexti].top)
        }
      // 后退
      } else if (dirc === 1) {
        if (nexti >= list.length) return
        const nextinfo = list[nexti]
        const nextTop = nexti < props.index ? nextinfo.top + nowHeight : nextinfo.top
        if (nextTop + nextinfo.height / 2 < nowTop + info.height) {
          nextinfo.changeOffset(-nowHeight)
          prei = nexti
          do { nexti++ } while (nexti === props.index)
          ctx.emit('updatemask', list[prei].top + list[prei].height - info.height)
        }
      }
      preOffset = offset.value
    }
  }

  function dragEdge (info: any, end: number) {
    if (info.top + offset.value < 0) offset.value = -list.top
    else if (info.top + offset.value + info.height > end) offset.value = end - info.height - list.top
  }

  function handleMousedown (e: MouseEvent) {
    isDrag.value = true
    ctx.emit('listdrag', true)
    my = e.clientY
    nowHeight = list[props.index].height + 8
    ctx.emit('updatemask', list[props.index].top, list[props.index].height)
  }

  function handleMouseup () {
    isDrag.value = false
    ctx.emit('listdrag', false)
    my = 0
    preOffset = 0
    nowHeight = 0
    // 全部还原
    if (nexti - 1 === props.index) offset.value = 0
    // 否则更新list
    else if (changeList) changeList(props.index, nexti)
  }

  function changeOffset (of: number, relative = true) {
    if (relative) offset.value += of
    else offset.value = of
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    if (infoPick) {
    // 收集其长宽高
      infoPick(props.index, {
        top: dragItem.value.offsetTop,
        height: dragItem.value.offsetHeight,
        node: dragItem.value,
        changeOffset
      })
    }
    window.addEventListener('mousemove', handleMousemove)
    window.addEventListener('mouseup', handleMousemove)
    window.addEventListener('mouseleave', handleMousemove)
  })

  onBeforeUnmount(() => {
    if (deleteList) deleteList(props.index)
    window.removeEventListener('mousemove', handleMousemove)
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
