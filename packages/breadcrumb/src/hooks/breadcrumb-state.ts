// vue
import { ref, onMounted, provide, getCurrentInstance } from 'vue'
// vue type
import type { SetupContext } from 'vue'
import type { Router } from 'vue-router'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  /**
   * router实例
   */
  const router = getCurrentInstance()!.appContext.config.globalProperties.$router as Router
  // DOM ref
  /**
   * 面包屑大框
   */
  const breadcrumb = ref()
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  /**
   * 选择面包屑进行跳转
   * @param to 跳转地址
   * @param replace 是否是replace模式
   */
  function toPick (to?: string, replace = false): void {
    if (!router) console.error('[viog-ui]: 你并没有在项目中引入vue-router，breadcrumb无法正确跳转！')
    else if (to) {
      console.log(replace)
      replace ? router.replace(to) : router.push(to)
    }
  }
  // 普通function函数
  /**
   * 生成分隔符
   */
  function generateSeparator (): void {
    const { children } = breadcrumb.value
    if (!children) return
    for (let i = children.length - 2; i >= 0; i--) {
      // 原生操作，生成separator分隔符
      const separator = document.createElement('span')
      separator.className = 'vi-breadcrumb__separator'
      separator.innerText = props.separator
      breadcrumb.value.insertBefore(separator, children[i].nextSibling)
    }
  }
  // provide
  provide('breadcrumb-color', props.color) // 提供面包屑的全局颜色
  provide('breadcrumb-to-pick', toPick) // 提供面包屑的跳转函数，通过该函数进行所有跳转操作
  // 生命周期
  onMounted(() => {
    generateSeparator()
  })

  return {
    breadcrumb
  }
}
