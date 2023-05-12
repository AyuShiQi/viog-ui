import { provide, computed, ref } from 'vue'
import type { SetupContext } from 'vue'

export default function (props: any, ctx: SetupContext) {
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
    dropdown
  }
}
