import { provide, reactive, computed } from 'vue'

import type { GroupValueProps } from '@/types/checkbox-types'
import { formTargetStateReactive } from '@/hooks/form-target-state'

export default function (props: GroupValueProps) {
  const groupValueObj = reactive({
    name: props.name,
    value: props.modelValue
  })
  computed(() => (groupValueObj.name = props.name))
  computed(() => (groupValueObj.value = props.modelValue))
  provide('checkbox-group', groupValueObj)
  if (props.name) formTargetStateReactive(props.name, props.modelValue)
}
