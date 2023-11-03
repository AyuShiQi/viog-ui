// vue
import { computed } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  // DOM ref
  // ref
  // reactive
  // inject
  // computed
  const hasChildren = computed(() => props.option?.children && props.option?.children instanceof Array && props.option?.children.length > 0)
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  return {
    hasChildren
  }
}
