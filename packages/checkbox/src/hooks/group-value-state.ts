import { ref, computed, provide } from 'vue'
import type { SetupContext } from 'vue'

import type { GroupValueProps } from '@/types/checkbox-types'

export default function (props: GroupValueProps, context: SetupContext, valueName: string) {
  const groupValue = computed({
    get: (): unknown[] => {
      return props.modelValue
    },
    set: (newPick: unknown[]) => {
      context.emit('update:modelValue', newPick)
    }
  })

  provide(valueName, ref(groupValue))
  provide('checkbox-group-name', props.name)
}
