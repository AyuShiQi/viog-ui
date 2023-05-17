import { ref, computed } from 'vue'
import type { SetupContext } from 'vue'
import type { InputProps } from '../type'
import type { InputDOM } from '@/types/vue-types'

import valueState from './value-state'
import slotState from './slot-state'
import searchState from './search-state'

export default function (props: InputProps, context: SetupContext) {
  // input dom
  const input = ref()
  // ref
  // 输出的value
  const value = ref('')

  const search = searchState(props, context, value, input)
  const inputEvent = valueState(props, context, value, search.search)
  const hasSlot = slotState(props, context)

  /* 密码展示部分 */
  // 是否展示密码
  // #region
  const ifShowPassword = ref(false)
  const passwordOrText = computed((): string => {
    return props.password && !ifShowPassword.value ? 'password' : 'text'
  })
  function changeShowPassword () {
    ifShowPassword.value = !ifShowPassword.value
  }
  // #endregion

  /* 清除区 */
  function toClear () {
    context.emit('update:modelValue', '')
    value.value = ''
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
      ifShowPassword.value = false
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
  // #endregion

  return {
    value,
    // password 显示控制
    ifShowPassword,
    passwordOrText,
    changeShowPassword,
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
    ...inputEvent,
    ...hasSlot,
    ...search
  }
}
