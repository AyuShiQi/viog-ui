// vue
import { provide, SetupContext } from 'vue'
// vue type
// 组件type
import type { formRuleFn, formFeedbackFn } from '../type/form-item'
// 外部hooks
// 内部hooks
// 外部模块

export default function (ctx: SetupContext) {
  // 普通常量
  /**
   * 用于接收form-item规则检测函数
   */
  const formSet = new Set<formRuleFn>()
  /**
   * 用于接收form-item反馈函数
   */
  const feedbackMap = new Map<string, formFeedbackFn>()
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  /**
   * 收集表单验证函数与表单反馈函数
   * @param fn 表单验证函数
   */
  function collectFormSet (name: string, fn1: formRuleFn, fn2: formFeedbackFn) {
    formSet.add(fn1)
    feedbackMap.set(name, fn2)
  }

  function submit () {
    let r = true
    const resMap = new Map<string, boolean>()
    const formMap = new Map<string, any>()
    for (const fn of formSet) {
      const [name, value, res, trunc] = fn()
      formMap.set(name, value)
      resMap.set(name, res)
      r &&= res
      // 如果item匹配错误而且选择截断
      if (!r && trunc) break
    }

    ctx.emit('submit', formMap, r, { resMap, getSubmitFeedback })
  }
  // 普通function函数
  /**
   * 处理反馈
   * @param infoMap 反馈来的错误信息map<表单名，错误提示信息>
   */
  function getSubmitFeedback (infoMap: Map<string, string>) {
    for (const [name, info] of infoMap.entries()) {
      const feedbackFn = feedbackMap.get(name)
      console.log(feedbackMap)
      console.log(name, info)
      if (feedbackFn) feedbackFn(info)
    }
  }
  // provide
  provide('form-collect-form-set', collectFormSet)
  // 生命周期
  return {
    submit,
    getSubmitFeedback
  }
}
