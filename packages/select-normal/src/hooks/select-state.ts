import { provide, computed, ref } from 'vue'
import type { SetupContext } from 'vue'

import searchState from './search-state'
import aliasState from './alias-state'
import multiState from './multi-state'

export default function (props: any, ctx: SetupContext, useAlias = true) {
  const dropdown = ref()
  const choosed = computed(() => props.modelValue)

  multiState(props)
  const alias = aliasState(useAlias)
  const search = searchState(props, ctx, dropdown, choosed)

  function changeSelect (newValue: any) {
    if (props.once) {
      dropdown.value?.toclose()
    }
    if (props.multi) {
      const index = props.modelValue.indexOf(newValue)
      // 不存在要添加
      if (index === -1) {
        props.modelValue.push(newValue)
      // 如果存在要删除
      } else {
        props.modelValue.splice(index, 1)
      }
    } else ctx.emit('update:modelValue', newValue)
  }

  function deleteSelect (value: any) {
    props.modelValue.splice(props.modelValue.indexOf(value), 1)
  }

  // 显现的选择
  const chooseShow = computed(() => {
    // 没有选择就返回placeholder
    if (isEmpty.value) return props.placeholder

    // 多选直接返回选择列表
    if (props.multi) return props.modelValue
    return alias.aliasShow(props.modelValue)
  })

  // 判断是否有选择
  const isEmpty = computed(() => {
    if (props.multi) {
      return props.modelValue.length === 0
    }
    return !props.modelValue
  })

  provide('choosed', choosed)
  provide('update:choosed', changeSelect)
  provide('delete:choosed', deleteSelect)
  provide('choose-type', props.chooseType)

  return {
    isEmpty,
    dropdown,
    chooseShow,
    ...search,
    ...alias
  }
}
