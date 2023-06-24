// vue
import { inject, provide, ref } from 'vue'
// vue type
import type { Ref } from 'vue'
// 组件type
import type { CollectFormSet, ResArray } from '../type/form'
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  // DOM ref
  /**
   * 下标0存储name，下标1存储value
   */
  const valueMap: [string, any] = ['', undefined]
  // ref
  const showInfo = ref('')
  const isValid = ref(true)
  // reactive
  // inject
  /**
   * submit被置为true的时候，就代表form要开始提交表单了
   */
  const collectFormSet = inject('form-collect-form-set', undefined) as CollectFormSet | undefined
  // computed
  // 事件方法
  // 方法
  /**
   * 设置及更新当前表单值
   * @param name 表单名
   * @param value 表单值
   */
  function updateMap (name: string, value: any) {
    valueMap[0] = name
    valueMap[1] = value
    // console.log(valueMap)
    if (props.auto) checkValue()
  }

  /**
   * 检查表单值
   * @returns 是否检验通过
   */
  function checkValue (): boolean {
    let res = true
    const value = String(valueMap[1])
    // 自定义规则检测
    if (props.rules instanceof Array) {
      for (const rule of props.rules) {
        res = execCheck(rule.rule, value)
        if (res) continue
        showInfo.value = rule.info ?? props.errorInfo
        break
      }
    } else {
      res = execCheck(props.rule, value)
      if (!res) showInfo.value = props.errorInfo
    }

    /**
     * 临时的，要改回来
     */
    showInfo.value = props.errorInfo
    isValid.value = false
    return res
  }

  function getValueMap (): ResArray {
    const res = checkValue()
    return [...valueMap, res]
  }
  // 普通function函数
  /**
   * 执行检查
   * @param rule 检查规则
   * @param value 对应值
   * @returns 是否通过检测
   */
  function execCheck (rule: any, value: string): boolean {
    if (rule instanceof Function) {
      return rule(value)
    } else if (typeof rule === 'string' || rule instanceof RegExp) {
      // 正则表达匹配区
      return RegExp(rule).test(value)
    }
    return true
  }
  // provide
  provide('form-item-update-map', updateMap)
  // 生命周期
  if (collectFormSet) collectFormSet(getValueMap)

  return {
    isValid,
    showInfo
  }
}
