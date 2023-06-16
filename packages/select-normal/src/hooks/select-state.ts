import { provide, computed, ref } from 'vue'
import type { SetupContext } from 'vue'

import searchState from './search-state'
import aliasState from './alias-state'

export default function (props: any, ctx: SetupContext) {
  const dropdown = ref()
  const choosed = computed(() => props.modelValue)

  const alias = aliasState()
  const search = searchState(props, ctx, dropdown, choosed)

  function changeSelect (newValue: any) {
    if (props.once) {
      dropdown.value?.toclose()
    }
    ctx.emit('update:modelValue', newValue)
  }

  // 显现的选择
  const chooseShow = computed(() => {
    return isEmpty() ? props.placeholder : alias.aliasMap.get(props.modelValue)
  })

  // 判断是否有选择
  function isEmpty () {
    return !props.modelValue
  }

  provide('choosed', choosed)
  provide('update:choosed', changeSelect)
  provide('choose-type', props.chooseType)

  return {
    isEmpty,
    dropdown,
    chooseShow,
    ...search
  }
}
