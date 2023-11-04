// vue
import { ref, watch, onUpdated, computed } from 'vue'
import type { SetupContext } from 'vue'
// vue type
// 组件type
// 外部hooks
import openState from '@/hooks/open-state'
import boxPositionState from '@/hooks/box-position-state'
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  const open = openState()
  const boxPosition = boxPositionState(props.mode, props.scrollTarget)

  const originOpen = computed(() => props.modelValue)
  watch(open.open, () => {
    if (open.open.value !== originOpen.value) ctx.emit('update:modelValue', open.open.value)
  })

  watch(originOpen, () => {
    if (originOpen.value !== open.open.value) open.open.value = originOpen.value
  })

  // 针对hover的方法
  function mouseClose () {
    if (props.trigger !== 'hover') return
    open.toClose({
      afterCb: boxPosition.toChangeViewPosition
    })
  }

  function mouseOpen () {
    if (props.trigger !== 'hover') return
    if (props.disabled) return
    open.toOpen({
      afterCb: boxPosition.toChangeViewPosition
    })
  }

  // 针对click的方法
  function changeOpen () {
    if (props.trigger !== 'click') return
    if (props.disabled) return
    // 当此次操作时打开时，仅做重新计算处理
    if (!open.open.value) {
      open.toSelect({
        preCb: () => !props.noTriggerOpen,
        afterCb: boxPosition.toChangeViewPosition
      })
    } else {
      open.toSelect({
        preCb: () => !props.noTriggerOpen,
        afterCb: boxPosition.toChangeViewPosition
      })
    }
  }

  function toopen () {
    open.toOpen({
      afterCb: boxPosition.toChangeViewPosition
    })
  }

  function toclose () {
    open.toClose({
      afterCb: boxPosition.toChangeViewPosition
    })
  }

  return {
    ...open,
    ...boxPosition,
    changeOpen,
    mouseOpen,
    mouseClose,
    toopen,
    toclose
  }
}
