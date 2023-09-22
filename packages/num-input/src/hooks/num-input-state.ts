// vue
import { computed, ref, watch } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  const value = ref(props.modelValue)
  // reactive
  // inject
  // computed
  const origin = computed(() => props.modelValue)

  watch(origin, () => {
    value.value = Number(origin.value)
  })

  watch(value, () => {
    const now = Number(value.value)
    if (Number.isNaN(now)) {
      if (Number.isNaN(Number(props.modelValue))) {
        ctx.emit('update:modelValue', 0)
        value.value = 0
      }
      value.value = props.modelValue
    } else {
      value.value = now
      ctx.emit('update:modelValue', now)
    }
  })
  // 事件方法
  function addNum () {
    const now = Number(value.value)
    value.value = props.max ? Math.min(now + props.unit, props.max) : now + props.unit
  }

  function delNum () {
    const now = Number(value.value)
    value.value = props.min ? Math.max(now - props.unit, props.min) : now - props.unit
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    value,
    addNum,
    delNum
  }
}
