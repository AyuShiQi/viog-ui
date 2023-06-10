import { inject, computed } from 'vue'
import type { SetupContext, ComputedRef } from 'vue'

import slotState from './slot-state'

export default function (props: any, ctx: SetupContext) {
  const hasSlot = slotState()

  const changeSelect: any = inject('update:choosed')
  const chooseType = inject('choose-type')
  const choosed = inject('choosed')

  const isChoosed = computed((): boolean => {
    return (choosed as ComputedRef).value === props.value
  })

  function toChoose () {
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
