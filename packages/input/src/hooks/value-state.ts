import { computed } from 'vue'
import type { SetupContext, Ref } from 'vue'
import type { InputProps } from '../type'

import { InputEvent } from '@/types/vue-types'

import strToNumstr from '../../../utils/number-utils/str-to-numstr'

export default function (props: InputProps, ctx: SetupContext, search: Ref) {
  // 输入处理
  const value = computed(() => {
    // console.log(props.modelValue)
    if (props.number) {
      const newValue = strToNumstr(String(props.modelValue))
      if (props.modelValue !== newValue) ctx.emit('update:modelValue', newValue)
    } else if (isMaxLength(String(props.modelValue))) {
      ctx.emit('update:modelValue', String(props.modelValue).slice(0, props.maxlength))
    }
    if (!props.modelValue) {
      return String(props.modelValue)
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
  let preInput: string
  function beforeInput (E: Event): void {
    const e = E as unknown as InputEvent
    preInput = e.target.value
    // 大于最大长度，直接不允许输入，对输入法无效
    if (isMaxLength(e.target.value)) {
      E.preventDefault()
    }
  }

  // 输入时
  function handleInput (E: Event): void {
    // console.log('ok')
    const e = E as unknown as InputEvent
    const curValue = parseValidValue(e.target.value)
    if (toUpdateValue(e)) {
      ctx.emit('update:modelValue', curValue)
      ctx.emit('input', curValue)
      // search搜索
      if (props.search && search.value) ctx.emit('search', curValue)
    }
  }

  function handleChange (E: Event): void {
    const e = E as unknown as InputEvent
    if (toUpdateValue(e)) {
      ctx.emit('change')
    }
  }

  /**
   * 将数据转化为有效的input数据
   * @param value 目标转化数据
   * @returns 有效数据
   */
  function parseValidValue (value: string) {
    if (props.number) {
      const newValue = strToNumstr(String(value))
      return newValue
    } else if (isMaxLength(String(value))) {
      return value.slice(0, props.maxlength)
    }
    return value
  }

  return {
    value,
    // change与input事件
    handleInput,
    handleChange,
    beforeInput
  }
}
