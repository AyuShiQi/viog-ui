import { ref, inject, computed } from 'vue'
import type { Ref, SetupContext } from 'vue'

import { RadioDOM } from '@/types/vue-types'
import { RadioProps } from '@/types/radio-types'

export default function (props: RadioProps, context: SetupContext) {
  const hasGroup = (function (): boolean {
    return inject('radio-group-value', undefined) !== undefined
  })()

  const nowPick: Ref = inject('radio-group-value', ref())

  function handleChange (): void {
    hasGroup ? (nowPick.value = props.value) : context.emit('update:modelValue', props.value)
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

  return {
    nowPick,
    pickValue,
    handleChange,
    toPick,
    radio
  }
}
