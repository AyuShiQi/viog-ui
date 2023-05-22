// vue
import { computed, ref } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  // ref
  const res = /\..+$/.test(props.name)
  const format = res ? props.name.split('.').pop().toLowerCase() : 'default'
  const sizeString = computed(() => {
    let size = props.size / 1024
    if (size < 1024) return `${size.toFixed(2)}KB`
    else {
      size /= 1024
      if (size < 1024) return `${size.toFixed(2)}MB`
      else return `${(size / 1024).toFixed(2)}MB`
    }
  })
  // reactive
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    format,
    sizeString
  }
}
