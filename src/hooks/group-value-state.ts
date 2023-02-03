import { ref, computed, provide } from 'vue'

import { GroupValueProps, VueContext } from '@/types/vue-types'

export default function (props: GroupValueProps, context: VueContext, valueName: string) {
  const groupValue = computed({
    get: (): number | string | boolean => {
      return props.modelValue
    },
    set: (newPick: number | string | boolean) => {
      context.emit('update:modelValue', newPick)
    }
  })

  provide(valueName, ref(groupValue))
}
