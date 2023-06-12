import { onMounted, computed } from 'vue'
import type { SetupContext, Ref } from 'vue'
import type { InputProps } from '../type'

import { InputEvent } from '@/types/vue-types'

import strToNumstr from '../../../utils/string-utils/str-to-numstr'

export default function (props: InputProps, context: SetupContext, search: Ref) {
  const value = computed(() => {
    if (props.number) {
      const newValue = strToNumstr(props.modelValue)
      if (props.modelValue !== newValue) context.emit('update:modelValue', newValue)
    }
    return props.modelValue
  })

  // 用于记录上一次输入
  let preInput: string
  /* change与input与数字区 */
  // 验证最大长度下
  function isMaxLength (value: string): boolean {
    if (props.maxlength === undefined) return false
    if (value.length > props.maxlength) return true
    return false
  }

  // 验证数字状态下
  function toUpdateValue (e: InputEvent): boolean {
    // 数字辨别区域
    // if (props.number && e.inputType === 'insertCompositionText') {
    //   e.target.value = preInput
    //   return false
    // }
    return true
  }

  // 输入前
  function beforeInput (E: Event): void {
    const e = E as unknown as InputEvent
    // preInput = e.target.value
    // // console.log(e.target.value, e.inputType)
    // if (isMaxLength(e.target.value)) {
    //   E.preventDefault()
    // } else if (props.number) handleNumber(e.inputType, e.data, E)
  }

  // 输入时
  function handleInput (E: Event): void {
    // console.log('ok')
    const e = E as unknown as InputEvent
    if (toUpdateValue(e)) {
      context.emit('update:modelValue', e.target.value)
      context.emit('input')
      // search搜索
      if (props.search && search.value) context.emit('search', props.modelValue)
    }
  }

  function handleKeyUp (e: KeyboardEvent) {
    // 按下enter键自动失焦
    if (e.code === 'Enter') (e!.target as any).blur()
  }

  function handleChange (E: Event): void {
    const e = E as unknown as InputEvent
    if (toUpdateValue(e)) {
      context.emit('change')
    }
  }

  function handleNumber (inputType: string, data: any, e: Event) {
    // if (inputType === 'insertCompositionText') {
    //   // 暂时对输入法无效，在input已经发生后处理
    //   e.preventDefault()
    // } else if (inputType === 'insertText' && Number.isNaN(parseInt(data))) {
    //   e.preventDefault()
    //   // number拒绝历史处理，一劳永逸处理错误问题
    // } else if (inputType === 'historyRedo' || inputType === 'historyUndo') {
    //   e.preventDefault()
    // } else if (inputType === 'insertFromDrop' && Number.isNaN(parseInt(data))) {
    //   e.preventDefault()
    // } else if (inputType === 'insertFromPaste' && Number.isNaN(parseInt(data))) {
    //   e.preventDefault()
    // }
  }

  return {
    value,
    // change与input事件
    handleInput,
    handleChange,
    handleKeyUp,
    beforeInput
  }
}
