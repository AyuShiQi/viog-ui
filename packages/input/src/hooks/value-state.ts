import { onMounted, ref, watch } from 'vue'
import type { SetupContext } from 'vue'

import { InputEvent } from '@/types/vue-types'
import { InputProps } from '@/types/input-types'

export default function (props: InputProps, context: SetupContext) {
  onMounted(() => {
    if (props.number && Number.isNaN(Number.parseInt(props.modelValue))) {
      context.emit('update:modelValue', '')
    }
  })

  const suf = ref('')
  const pre = ref('')
  const value = ref('')

  // watch([suf, post], () => {
  //   context.emit('update:modelValue', suf.value + value.value + post.value)
  // })

  /* change与input与数字区 */
  // 验证最大长度下
  function isMaxLength (value: string): boolean {
    if (props.maxlength === undefined) return false
    if (value.length > props.maxlength) return true
    return false
  }

  // 验证数字状态下
  function toUpdateValue (e: InputEvent): boolean {
    // 长度超过，不理睬
    if (isMaxLength(e.target.value)) {
      e.target.value = props.modelValue
      return false
    }
    // 数字辨别区域
    if (props.number) {
      // 代表值没有变化
      if (e.inputType === undefined) {
        e.target.blur()
        return false
        // 按下的按键是数字或者是删除键才行
      } else if (e.inputType === 'insertCompositionText') {
        e.target.value = props.modelValue
        return false
      } else if (e?.inputType !== 'insertText' || (!Number.isNaN(parseInt(e.data)))) {
        // 合规才传
        return true
      } else {
        // input变回原来的状态
        e.target.value = props.modelValue
        return false
      }
    }
    return true
  }

  function handleInput (e: InputEvent): void {
    if (toUpdateValue(e)) {
      value.value = e.target.value
      context.emit('update:modelValue', suf.value + e.target.value + pre.value)
      context.emit('input')
    }
  }

  function handleChange (e: InputEvent): void {
    if (toUpdateValue(e)) {
      value.value = e.target.value
      context.emit('update:modelValue', suf.value + e.target.value + pre.value)
    }
    if (e.inputType === undefined) context.emit('change')
  }

  return {
    // change与input事件
    handleInput,
    handleChange,
    suf,
    pre
  }
}
