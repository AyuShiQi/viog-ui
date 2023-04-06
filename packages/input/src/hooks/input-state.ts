import { ref, computed } from 'vue'
import type { SetupContext, Ref } from 'vue'

import { InputDOM } from '@/types/vue-types'
import { InputProps } from '@/types/input-types'

export default function (props: InputProps, context: SetupContext, value: Ref) {
  // input dom
  const input = ref()

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
    mouseLeave
  }
}
