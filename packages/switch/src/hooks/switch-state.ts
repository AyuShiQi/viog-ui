import { ref, onMounted } from 'vue'

import { VueContext } from '@/types/vue-types'
import { switchProps } from '@/types/switch-types'

export default function (props: switchProps, context: VueContext) {
  const checked = ref(false)

  function toChange (): void {
    if (props.disabled) return
    checked.value = !checked.value

    changeNowColor()
    if (checked.value) {
      context.emit('change')
      context.emit('on')
    } else {
      context.emit('change')
      context.emit('off')
    }
  }

  const nowColor = ref('')
  function changeNowColor (): void {
    if (checked.value) {
      nowColor.value = props.rightColor
    } else {
      nowColor.value = props.leftColor
    }
  }

  function toOn (): void {
    if (props.disabled) return
    checked.value = true
    changeNowColor()
    context.emit('change')
    context.emit('on')
  }

  function toOff (): void {
    if (props.disabled) return
    checked.value = false
    changeNowColor()
    context.emit('change')
    context.emit('off')
  }

  onMounted(() => {
    toOff()
  })

  return {
    checked,
    toChange,
    toOn,
    toOff,
    nowColor
  }
}
