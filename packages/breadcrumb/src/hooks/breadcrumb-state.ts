// vue
import { ref, onMounted, provide } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  const breadcrumb = ref()
  // ref
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  provide('breadcrumb-color', props.color)
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
