import { computed } from 'vue'
import type { SetupContext, Ref } from 'vue'
import type { InputProps } from '../type'

import { InputEvent } from '@/types/vue-types'

import strToNumstr from '../../../utils/number-utils/str-to-numstr'

export default function (props: InputProps, ctx: SetupContext, search: Ref) {
  // 输入处理
  const value = computed(() => {
    if (props.number) {
      const newValue = strToNumstr(props.modelValue)
      if (props.modelValue !== newValue) ctx.emit('update:modelValue', newValue)
    } else if (isMaxLength(props.modelValue)) {
      console.log(props.modelValue, props.modelValue.slice(0, props.maxlength))
      ctx.emit('update:modelValue', props.modelValue.slice(0, props.maxlength))
    }
    return props.modelValue
  })

  /* change与input与数字区 */
  // 验证最大长度下
  function isMaxLength (value: string): boolean {
    if (props.maxlength === undefined) return false
    if (value.length > props.maxlength) return true
    return false
  }

  // 验证数字状态下
  function toUpdateValue (e: InputEvent): boolean {
    // 数字辨别区域，输入法针对
    if (props.number && e.inputType === 'insertCompositionText') return false
    // 判断最大长度
    if (isMaxLength(e.target.value)) return false
    return true
  }

  // 输入前
  function beforeInput (E: Event): void {
    const e = E as unknown as InputEvent
    // 大于最大长度，直接不允许输入，对输入法无效
    if (isMaxLength(e.target.value)) {
      E.preventDefault()
    }
  }

  // 输入时
  function handleInput (E: Event): void {
    // console.log('ok')
    const e = E as unknown as InputEvent
    if (toUpdateValue(e)) {
      ctx.emit('update:modelValue', e.target.value)
      ctx.emit('input')
      // search搜索
      if (props.search && search.value) ctx.emit('search', props.modelValue)
    }
  }

  function handleChange (E: Event): void {
    const e = E as unknown as InputEvent
    if (toUpdateValue(e)) {
      ctx.emit('change')
    }
  }

  return {
    value,
    // change与input事件
    handleInput,
    handleChange,
    beforeInput
  }
}
