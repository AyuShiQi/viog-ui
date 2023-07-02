// vue
import { ref, inject, onMounted } from 'vue'
// vue type
// 组件type
import type { TitleOption } from '../types/table-column'
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  // DOM ref
  const column = ref()
  // ref
  // reactive
  // inject
  const addTitle = inject('table-add-title', undefined) as ((option: TitleOption) => void) | undefined
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onMounted(() => {
    if (addTitle) {
      const option: TitleOption = {
        value: props.value
      }
      if (column.value) {
        const width = window.getComputedStyle(column.value).getPropertyValue('width')
        if (width) option.width = width
      }
      // console.log(option)
      addTitle(option)
    }
  })

  return {
    column
  }
}
