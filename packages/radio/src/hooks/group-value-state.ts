import { ref, computed, provide } from 'vue'
import type { SetupContext } from 'vue'

import { GroupValueProps } from '@/types/radio-types'
import { formTargetStateRef } from '@/hooks/form-target-state'

export default function (props: GroupValueProps, context: SetupContext, valueName: string) {
  const groupValue = computed({
    get: (): number | string | boolean | undefined => {
      return props.modelValue
    },
    set: (newPick: number | string | boolean | undefined) => {
      context.emit('change', newPick)
      context.emit('update:modelValue', newPick)
    }
  })

  if (props.name) formTargetStateRef(props.name, groupValue)

  provide(valueName, ref(groupValue))
  if (props.name) provide('radio-group-name', props.name)
}
