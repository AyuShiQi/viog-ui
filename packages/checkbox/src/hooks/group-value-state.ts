import { ref, computed, provide } from 'vue'

import { VueContext } from '@/types/vue-types'
import { GroupValueProps } from '@/types/checkbox-types'

export default function (props: GroupValueProps, context: VueContext, valueName: string) {
  const groupValue = computed({
    get: (): unknown[] => {
      return props.modelValue
    },
    set: (newPick: unknown[]) => {
      context.emit('update:modelValue', newPick)
    }
  })

  provide(valueName, ref(groupValue))
}
