import { ref, computed, getCurrentInstance, ComponentInternalInstance } from 'vue'

import { VueContext, InputEvent, InputDOM } from '@/types/vue-types'
import { ViInputProps } from '@/types/input-types'

export default function (props: ViInputProps, context: VueContext) {
  const { proxy } = (getCurrentInstance() as ComponentInternalInstance)

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
  // input聚焦
  function toFocus () {
    (proxy?.$refs.input as InputDOM).focus()
  }
  // input聚焦
  function toBlur () {
    (proxy?.$refs.input as InputDOM).blur()
  }
  // #endregion

  /* change与input与数字区 */
  // #region
  const value = ref('')
  // 输入的value是否有效
  let isValid = true
  function toUpdateValue (e: InputEvent) {
    if (props.number) {
      if (e.inputType === undefined) {
        isValid = true
      } else if (e?.inputType !== 'insertText') {
        isValid = true
        value.value = e.target.value
      } else if (!Number.isNaN(parseInt(e.data)) && isValid) {
        value.value = e.target.value
      } else {
        isValid = false
      }
    } else {
      value.value = e.target.value
    }
  }
  function handleInput (e: InputEvent): void {
    toUpdateValue(e)
    context.emit('inputValue', value.value)
  }
  function handleChange (e: InputEvent): void {
    toUpdateValue(e)
    context.emit('changeValue', value.value)
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
    value.value = ''
  }

  return {
    // change与input事件
    value,
    handleInput,
    handleChange,
    // password 显示控制
    ifShowPassword,
    passwordOrText,
    changeShowPassword,
    // clear控制
    toClear,
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
