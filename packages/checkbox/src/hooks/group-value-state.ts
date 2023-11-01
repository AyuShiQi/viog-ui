import { provide } from 'vue'

import type { GroupValueProps } from '@/types/checkbox-types'
import { formTargetStateReactive } from '@/hooks/form-target-state'

export default function (props: GroupValueProps) {
  provide('checkbox-group-value', props.modelValue)
  provide('checkbox-group-name', props.name)
  if (props.name) formTargetStateReactive(props.name, props.modelValue)
}
