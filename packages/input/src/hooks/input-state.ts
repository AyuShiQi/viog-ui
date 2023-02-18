import { ref, computed } from 'vue'
import type { SetupContext } from 'vue'

import { InputDOM } from '@/types/vue-types'
import { InputProps } from '@/types/input-types'

export default function (props: InputProps, context: SetupContext) {
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
    if (!isEnter.value) ifShowPassword.value = false
    isFocus.value = false
  }
  // input dom
  const input = ref()
  // input聚焦
  function toFocus () {
    (input.value as InputDOM).focus()
  }
  // input聚焦
  function toBlur () {
    (input.value as InputDOM).blur()
  }
  // #endregion

  /* 密码展示部分 */
  // 是否展示密码
  // #region
  const ifShowPassword = ref(false)
  const passwordOrText = computed((): string => {
    return props.password && !ifShowPassword.value ? 'password' : 'text'
  })
  function changeShowPassword () {
    toFocus()
    ifShowPassword.value = !ifShowPassword.value
  }
  // #endregion

  /* 清除区 */
  function toClear () {
    toFocus()
    context.emit('update:modelValue', '')
  }

  return {
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
    // 鼠标进入input区域事件
    isEnter,
    mouseEnter,
    mouseLeave
  }
}
