import { provide, reactive } from 'vue'

import type { GroupValueProps } from '@/types/checkbox-types'

export default function (props: GroupValueProps) {
  const groupValue = reactive(props.modelValue)

  provide('checkbox-group-value', groupValue)
  provide('checkbox-group-name', props.name)
}
