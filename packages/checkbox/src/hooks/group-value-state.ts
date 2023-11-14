import { provide, reactive, onUpdated, SetupContext } from 'vue'

import type { GroupValueProps } from '@/types/checkbox-types'
import { formTargetStateReactive } from '@/hooks/form-target-state'

export default function (props: GroupValueProps, ctx: SetupContext) {
  const groupValueObj = reactive({
    name: props.name,
    value: props.modelValue
  })
  if (props.name) formTargetStateReactive(props.name, props.modelValue)

  function handleChange (value: any) {
    ctx.emit('change', value, [...groupValueObj.value])
  }

  provide('checkbox-group', groupValueObj)
  provide('checkbox-change', handleChange)

  onUpdated(() => {
    groupValueObj.name = props.name
    groupValueObj.value = props.modelValue
  })
}
