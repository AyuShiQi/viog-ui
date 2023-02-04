import { ref, computed, provide } from 'vue'

import { VueContext } from '@/types/vue-types'
import { GroupValueProps } from '@/types/radio-types'

export default function (props: GroupValueProps, context: VueContext, valueName: string) {
  const groupValue = computed({
    get: (): number | string | boolean | undefined => {
      return props.modelValue
    },
    set: (newPick: number | string | boolean | undefined) => {
      context.emit('update:modelValue', newPick)
    }
  })

  provide(valueName, ref(groupValue))
}
