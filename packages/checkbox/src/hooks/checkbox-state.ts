import { ref, inject, computed, reactive, onUpdated } from 'vue'
import type { SetupContext } from 'vue'

import { RadioDOM } from '@/types/vue-types'
import { CheckboxProps } from '@/types/checkbox-types'

export default function (props: CheckboxProps, context: SetupContext) {
  // 普通常量
  // DOM ref
  const checkbox = ref()
  // ref
  // reactive
  const checkboxGroup = inject('checkbox-group', reactive({
    name: props.name as string,
    // 选中值
    value: props.modelValue as any[]
  }))
  // inject
  // computed
  /**
   * 该checkbox是否包含于结果之中
   */
  const containsValue = computed((): boolean => {
    if (checkboxGroup.value instanceof Array) {
      // 检查是否每一个都在
      if (props.value instanceof Array) {
        let res = true
        for (const item of props.value) {
          res &&= checkboxGroup.value.includes(item)
        }
        return res
      }
      return checkboxGroup.value.includes(props.value)
    }
    return false
  })
  // 事件方法
  /**
   * 监听改变
   */
  function handleChange (): void {
    // 当前（曾经）是否在数组中
    const res = valueChange(checkboxGroup.value)
    context.emit('change', props.value, res)
    context.emit('update:modelValue', checkboxGroup.value)
  }

  function toPick (): void {
    (checkbox.value as RadioDOM).click()
  }
  // 方法
  // 普通function函数
  /**
   * 添加删除value
   * @param target 目标列表
   * @returns 返回value是否存在于目标中
   */
  function valueChange (target: any[]): boolean {
    // 包含结果则去除
    if (containsValue.value) {
      if (props.value instanceof Array) {
        for (const item of props.value) {
          const index = target.indexOf(item)
          target.splice(index, 1)
        }
      } else {
        const index = target.indexOf(props.value)
        target.splice(index, 1)
      }
      return true
    // 不包含结果则添加
    } else {
      if (props.value instanceof Array) {
        for (const item of props.value) {
          if (target.indexOf(item) === -1) target.push(item)
        }
      } else {
        target.push(props.value)
      }
      // 没有就加进去
      return false
    }
  }
  // provide
  // 生命周期
  onUpdated(() => {
    checkboxGroup.value = props.modelValue
    checkboxGroup.name = props.name
  })
  if (props.checked) {
    if (!containsValue.value) checkboxGroup.value.push(props.value)
  }

  return {
    checkboxGroup,
    handleChange,
    toPick,
    containsValue,
    checkbox
  }
}
