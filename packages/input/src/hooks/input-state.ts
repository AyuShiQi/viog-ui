import { computed, ref, watch } from 'vue'
import type { SetupContext } from 'vue'
import type { InputProps } from '../type'
import type { InputDOM } from '@/types/vue-types'

import valueState from './value-state'
import slotState from './slot-state'
import searchState from './search-state'
import passwordState from './password-state'

import { formTargetStateRef } from '@/hooks/form-target-state'

export default function (props: InputProps, context: SetupContext) {
  // input dom
  const input = ref()
  // ref
  const hasSlot = slotState()
  const search = searchState(props, context, input)
  const inputEvent = valueState(props, context, search.search)
  const password = passwordState(props)
  formTargetStateRef(props.name, inputEvent.value)

  /* 清除区 */
  function toClear () {
    context.emit('update:modelValue', '')
  }

  /* 鼠标进出input框事件 */
  // #region
  const isEnter = ref(false)
  function mouseEnter () {
    isEnter.value = true
  }
  function mouseLeave () {
    isEnter.value = false
  }
  // #endregion

  /* input框聚焦事件 */
  // #region
  const isFocus = ref(false)
  function focus () {
    isFocus.value = true
  }

  function blur () {
    // blur后需要还原所有状态
    if (!isEnter.value) {
      isFocus.value = false
      // 密码还原
      password.ifShowPassword.value = false
    }
  }

  // input聚焦
  function toFocus () {
    (input.value as InputDOM).focus()
  }
  // input聚焦
  function toBlur () {
    (input.value as InputDOM).blur()
  }
  function handleKeyUp (e: KeyboardEvent) {
    // 按下enter键自动失焦
    if (e.code === 'Enter') (e!.target as any).blur()
  }
  // #endregion

  return {
    input,
    // clear控制
    toClear,
    toFocus,
    toBlur,
    // input聚焦事件
    isFocus,
    focus,
    blur,
    mouseEnter,
    mouseLeave,
    handleKeyUp,
    ...inputEvent,
    ...hasSlot,
    ...search,
    ...password
  }
}
