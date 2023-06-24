import { onMounted, computed, useSlots } from 'vue'
import type { SetupContext } from 'vue'

import { SwitchProps } from '@/types/switch-types'

import { formTargetStateRef } from '@/hooks/form-target-state'

export default function (props: SwitchProps, context: SetupContext) {
  const slots = useSlots()

  const leftChoice = slots.leftChoice
  const rightChoice = slots.rightChoice
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

  formTargetStateRef(props.name, computed(() => props.modelValue))

  return {
    toChange,
    toOn,
    toOff,
    nowColor,
    leftChoice,
    rightChoice
  }
}
