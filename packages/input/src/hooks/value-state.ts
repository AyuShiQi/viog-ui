import { VueContext, InputEvent } from '@/types/vue-types'
import { ViInputProps } from '@/types/input-types'

export default function (props: ViInputProps, context: VueContext) {
  /* change与input与数字区 */

  // 验证最大长度下
  function isMaxLength (value: string): boolean {
    if (props.maxLength === undefined) return false
    if (value.length > props.maxLength) return true
    return false
  }

  // 验证数字状态下
  function toUpdateValue (e: InputEvent): boolean {
    // 长度超过，不理睬
    if (isMaxLength(e.target.value)) {
      e.target.value = props.value
      return false
    }
    // 数字辨别区域
    if (props.number) {
      // 代表值没有变化，所以不传，但是操作时合规的
      if (e.inputType === undefined) {
        return false
        // 按下的按键是数字或者是删除键才行
      } else if (e?.inputType !== 'insertText' || (!Number.isNaN(parseInt(e.data)))) {
        // 合规才传
        return true
      } else {
        // input变回原来的状态
        e.target.value = props.value
        return false
      }
    }
    return false
  }

  function handleInput (e: InputEvent): void {
    if (toUpdateValue(e)) {
      context.emit('inputValue', e.target.value)
    }
  }

  function handleChange (e: InputEvent): void {
    if (toUpdateValue(e)) {
      context.emit('changeValue', e.target.value)
    }
  }

  return {
    // change与input事件
    handleInput,
    handleChange
  }
}
