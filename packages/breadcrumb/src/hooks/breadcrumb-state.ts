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
  const router = getCurrentInstance()!.appContext.config.globalProperties.$router as Router
  // DOM ref
  const breadcrumb = ref()
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  function toPick (to?: string) {
    if (!router) console.error('[viog-ui]: 你并没有在项目中引入vue-router，breadcrumb无法正确跳转！')
    else if (to) {
      props.replace ? router.replace(to) : router.push(to)
    }
  }
  // provide
  provide('breadcrumb-color', props.color)
  provide('breadcrumb-to-pick', toPick)
  // 生命周期
  onMounted(() => {
    const { children } = breadcrumb.value
    if (!children) return
    for (let i = children.length - 2; i >= 0; i--) {
      // 原生操作
      const separator = document.createElement('span')
      separator.className = 'vi-breadcrumb__separator'
      separator.innerText = props.separator
      breadcrumb.value.insertBefore(separator, children[i].nextSibling)
    }
  })

  return {
    breadcrumb
  }
}
