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
    const target = delZero(String(value.value))
    const now = Number(target)
    if (target === '-' || /[0-9]\.$/.test(target)) {
      value.value = target
    } else if (Number.isNaN(now)) {
      if (Number.isNaN(Number(props.modelValue))) {
        ctx.emit('update:modelValue', 0)
        value.value = 0
      }
      value.value = props.modelValue
    } else {
      const cur = Math.min(Math.max(props.min, now), props.max)
      value.value = cur
      ctx.emit('update:modelValue', cur)
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

  function handleInputBlur () {
    const now = Number(value.value)
    if (Number.isNaN(now)) {
      if (Number.isNaN(Number(props.modelValue))) {
        ctx.emit('update:modelValue', 0)
        value.value = 0
      }
      value.value = props.modelValue
    } else {
      const cur = Math.min(Math.max(props.min, now), props.max)
      value.value = cur
      ctx.emit('update:modelValue', cur)
    }
  }
  // 方法
  // 普通function函数
  function delZero (str: string): string {
    let i = 0
    while (i < str.length - 1 && str[i] === '0') i++
    return str.slice(i)
  }
  // provide
  // 生命周期
  return {
    value,
    addNum,
    delNum,
    handleInputBlur
  }
}
