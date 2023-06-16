import { ref, inject, computed } from 'vue'
import type { Ref, SetupContext } from 'vue'

import { RadioDOM } from '@/types/vue-types'
import { RadioProps } from '@/types/radio-types'

export default function (props: RadioProps, context: SetupContext) {
  // 判断是否有radio组
  const hasGroup = (function (): boolean {
    return inject('radio-group-value', undefined) !== undefined
  })()

  const nowPick: Ref = inject('radio-group-value', ref())
  const groupName = inject('radio-group-name', props.name)

  function handleChange (): void {
    if (hasGroup) {
      if (nowPick.value === props.value) nowPick.value = undefined
      else nowPick.value = props.value
    } else {
      if (props.modelValue === props.value) context.emit('update:modelValue', undefined)
      else context.emit('update:modelValue', props.value)
    }
    context.emit('change')
  }

  // radio DOM
  const radio = ref()
  function toPick (): void {
    (radio.value as RadioDOM).click()
  }

  const pickValue = computed((): string | number | boolean | undefined => {
    return hasGroup ? nowPick.value : props.modelValue
  })

  // 初次选中
  if (props.selected) {
    hasGroup ? nowPick.value = props.value : context.emit('update:modelValue', props.value)
    context.emit('change')
  }

  return {
    nowPick,
    pickValue,
    handleChange,
    toPick,
    radio,
    groupName
  }
}
