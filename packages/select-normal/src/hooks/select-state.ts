import { provide, computed, ref } from 'vue'
import type { SetupContext } from 'vue'

import searchState from './search-state'

export default function (props: any, ctx: SetupContext) {
  const search = searchState(props, ctx)
  const dropdown = ref()

  const choosed = computed(() => props.modelValue)

  function changeSelect (newValue: any) {
    if (props.once) {
      dropdown.value?.toClose()
    }
    ctx.emit('update:modelValue', newValue)
  }

  function isEmpty () {
    return !props.modelValue
  }

  provide('choosed', choosed)
  provide('update:choosed', changeSelect)
  provide('choose-type', props.chooseType)

  return {
    isEmpty,
    dropdown,
    ...search
  }
}
