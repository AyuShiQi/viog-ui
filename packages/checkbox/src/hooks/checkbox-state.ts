import { ref, inject, computed } from 'vue'
import type { SetupContext, Ref } from 'vue'

import { RadioDOM } from '@/types/vue-types'
import { CheckboxProps } from '@/types/checkbox-types'

export default function (props: CheckboxProps, context: SetupContext) {
  // 这个checkbox是否被group包裹
  const hasGroup = (function (): boolean {
    return inject('checkbox-group-value', undefined) !== undefined
  })()
  // 当前选择
  const nowPick: Ref = inject('checkbox-group-value', ref())
  const groupName = inject('checkbox-group-name', props.name)
  // 该checkbox是否包含于结果之中
  const containsValue = computed((): boolean => {
    return hasGroup ? nowPick.value.includes(props.value) : props.modelValue.includes(props.value)
  })
  // 监听改变
  function handleChange (): void {
    if (!hasGroup) nowPick.value = props.modelValue
    // 存在就剔除，那么就从那个队列里把它剔除
    if (containsValue.value) {
      const index = nowPick.value.indexOf(props.value)
      nowPick.value.splice(index, 1)
    } else {
      // 没有就加进去
      nowPick.value.push(props.value)
    }
    if (!hasGroup) context.emit('update:modelValue', nowPick)
    context.emit('change')
  }
  // DOM ref
  const checkbox = ref()
  function toPick (): void {
    (checkbox.value as RadioDOM).click()
  }

  if (props.checked) {
    if (!hasGroup) nowPick.value = props.modelValue
    if (!containsValue.value) {
      nowPick.value.push(props.value)
      if (!hasGroup) context.emit('update:modelValue', nowPick)
    }
  }

  return {
    nowPick,
    handleChange,
    toPick,
    containsValue,
    checkbox,
    groupName
  }
}
