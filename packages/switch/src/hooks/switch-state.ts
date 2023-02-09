import { onMounted, computed } from 'vue'
import type { SetupContext } from 'vue'

import { SwitchProps } from '@/types/switch-types'

export default function (props: SwitchProps, context: SetupContext) {
  const nowColor = computed((): string => {
    return props.modelValue ? props.rightColor : props.leftColor
  })

  function toChange (): void {
    if (props.disabled) return

    context.emit('update:modelValue', !props.modelValue)
    if (props.modelValue) {
      context.emit('change')
      context.emit('on')
    } else {
      context.emit('change')
      context.emit('off')
    }
  }

  function toOn (): void {
    if (props.disabled) return
    context.emit('update:modelValue', true)
    context.emit('change')
    context.emit('on')
  }

  function toOff (): void {
    if (props.disabled) return
    context.emit('update:modelValue', false)
    context.emit('change')
    context.emit('off')
  }

  onMounted(() => {
    if (props.modelValue) toOn()
    else toOff()
  })

  return {
    toChange,
    toOn,
    toOff,
    nowColor
  }
}
