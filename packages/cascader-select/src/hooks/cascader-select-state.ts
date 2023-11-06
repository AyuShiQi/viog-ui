// vue
import { computed, reactive } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import { formTargetStateReactive } from '@/hooks/form-target-state'

export default function (props: any) {
  formTargetStateReactive(props.name, props.modelValue)
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  const aliasMaps = computed(() => {
    const aliasMaps = new Array<Map<any, any>>()
    childrenTarverse(0, props.options)

    function childrenTarverse (step: number, options: any) {
      if (!aliasMaps[step]) aliasMaps[step] = new Map()
      const nowMap = aliasMaps[step]
      for (const option of options) {
        nowMap.set(option.value, option.label === undefined ? option.value : option.label)
        if (option.children instanceof Array) childrenTarverse(step + 1, option.children)
      }
    }
    return aliasMaps
  })
  const needPlaceholder = computed(() => !props.modelValue || props.modelValue.length === 0)
  const resultView = computed(() => {
    const alias = new Array(props.modelValue.length)
    for (let i = 0; i < props.modelValue.length; i++) {
      alias[i] = aliasMaps.value[i].get(props.modelValue[i])
    }
    return needPlaceholder.value ? props.placeholder : alias.join(props.separator)
  })
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    needPlaceholder,
    resultView
  }
}
