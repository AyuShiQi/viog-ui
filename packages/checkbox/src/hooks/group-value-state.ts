import { provide, reactive, computed, onUpdated } from 'vue'

import type { GroupValueProps } from '@/types/checkbox-types'
import { formTargetStateReactive } from '@/hooks/form-target-state'

export default function (props: GroupValueProps) {
  const groupValueObj = reactive({
    name: props.name,
    value: props.modelValue
  })
  provide('checkbox-group', groupValueObj)
  if (props.name) formTargetStateReactive(props.name, props.modelValue)

  onUpdated(() => {
    groupValueObj.name = props.name
    groupValueObj.value = props.modelValue
  })
}
