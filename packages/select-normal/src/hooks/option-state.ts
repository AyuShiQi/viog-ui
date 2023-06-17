import { inject, computed } from 'vue'
import type { SetupContext, ComputedRef } from 'vue'

import slotState from './slot-state'
import optionMultiState from './option-multi-state'
import optionAliasState from './option-alias-state'

export default function (props: any, ctx: SetupContext) {
  const hasSlot = slotState()
  const optionMulti = optionMultiState()
  optionAliasState(props)

  const changeSelect: any = inject('update:choosed')
  const chooseType = inject('choose-type')
  const choosed = inject('choosed') as ComputedRef

  const isChoosed = computed((): boolean => {
    if (optionMulti.multi) {
      // 多选操作
      return choosed.value.includes(props.value)
    }
    return choosed.value === props.value
  })

  function toChoose () {
    if (props.disabled) return
    changeSelect(props.value)
  }

  if (props.selected) toChoose()

  return {
    choosed,
    isChoosed,
    toChoose,
    chooseType,
    ...hasSlot
  }
}
