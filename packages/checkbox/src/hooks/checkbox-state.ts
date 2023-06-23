import { ref, inject, computed } from 'vue'
import type { SetupContext } from 'vue'

import { RadioDOM } from '@/types/vue-types'
import { CheckboxProps } from '@/types/checkbox-types'

export default function (props: CheckboxProps, context: SetupContext) {
  // 普通常量
  const groupName = inject('checkbox-group-name', props.name)
  // DOM ref
  const checkbox = ref()
  // ref
  /**
   * 当前选择
   */
  const nowPick: any[] = inject('checkbox-group-value', props.modelValue)
  // reactive
  // inject
  // computed
  // 该checkbox是否包含于结果之中
  const containsValue = computed((): boolean => {
    return nowPick instanceof Array ? nowPick.includes(props.value) : false
  })
  // 事件方法
  /**
   * 监听改变
   */
  function handleChange (): void {
    // 当前是否在数组中
    const res = valueChange(nowPick)
    context.emit('change', props.value, res)
  }

  function toPick (): void {
    (checkbox.value as RadioDOM).click()
  }
  // 方法
  // 普通function函数
  function valueChange (target: any[]): boolean {
    if (containsValue.value) {
      const index = target.indexOf(props.value)
      target.splice(index, 1)
      return true
    } else {
      // 没有就加进去
      target.push(props.value)
      return false
    }
  }
  // provide
  // 生命周期
  if (props.checked) {
    if (!containsValue.value) nowPick.push(props.value)
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
