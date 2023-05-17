import { onMounted, ref, watch } from 'vue'
import type { SetupContext, Ref } from 'vue'
import type { InputProps } from '../type'

import { InputEvent } from '@/types/vue-types'

export default function (props: InputProps, context: SetupContext, value: Ref, search: Ref) {
  onMounted(() => {
    if (props.number && Number.isNaN(Number.parseInt(props.modelValue))) {
      context.emit('update:modelValue', '')
    }
  })

  const suf = ref('')
  const pre = ref('')

  watch([suf, pre], () => {
    if (value.value) context.emit('update:modelValue', pre.value + value.value + suf.value)
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
    const E = e as unknown as Event
    // console.log(value.value, e.inputType)
    // 数字辨别区域
    if (props.number) {
      if (e.inputType !== 'insertCompositionText') {
        if (!Number.isNaN(parseInt(e.target.value))) value.value = parseInt(e.target.value)
        else if (e.target.value === '') value.value = e.target.value
        else return false
      } else return false
    }
    return true
  }

  function beforeInput (E: Event): void {
    const e = E as unknown as InputEvent
    // console.log(value.value, e.inputType)
    if (isMaxLength(e.target.value)) {
      E.preventDefault()
    } else if (props.number) {
      if (e.inputType === 'insertCompositionText') {
        // 暂时对输入法无效
        E.preventDefault()
      } else if (e.inputType === 'insertText' && Number.isNaN(parseInt(e.data))) {
        E.preventDefault()
      } else if (e.inputType === 'historyRedo' || e.inputType === 'historyUndo') {
        E.preventDefault()
      } else if (e.inputType === 'insertFromDrop' && Number.isNaN(parseInt(e.data))) {
        E.preventDefault()
      } else if (e.inputType === 'insertFromPaste' && Number.isNaN(parseInt(e.data))) {
        E.preventDefault()
      }
    }
  }

  function handleInput (E: Event): void {
    const e = E as unknown as InputEvent
    if (toUpdateValue(e)) {
      if (!props.number) value.value = e.target.value
      context.emit('update:modelValue', pre.value + value.value + suf.value)
      context.emit('input')
      // search搜索
      if (props.search && search.value) context.emit('search', value.value)
    }
  }

  function handleKeyUp (e: KeyboardEvent) {
    if (e.code === 'Enter') (e!.target as any).blur()
  }

  function handleChange (E: Event): void {
    const e = E as unknown as InputEvent
    if (toUpdateValue(e)) {
      if (!props.number) value.value = e.target.value
      context.emit('update:modelValue', pre.value + value.value + suf.value)
      context.emit('change')
    }
    // if (e.inputType === undefined) context.emit('change')
  }

  return {
    // change与input事件
    handleInput,
    handleChange,
    handleKeyUp,
    beforeInput,
    suf,
    pre
  }
}
