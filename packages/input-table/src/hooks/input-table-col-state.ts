// vue
import { inject, ref, onMounted } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  // DOM ref
  const tableCol = ref()
  // ref
  const targetWidth = ref('')
  // reactive
  // inject
  const id = (inject('vi-input-table-id-getter', () => 0) as () => number)()
  const idCollector = inject('vi-input-table-id-collector', undefined) as ((t: number) => void) | undefined
  const collectCol = inject('vi-collect-col') as ((id: number, val: any) => void) | undefined
  const collectColWidth = inject('vi-collect-col-width') as ((value: any, val: string) => void) | undefined
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  if (idCollector) idCollector(id)
  if (collectCol) collectCol(id, props.value || id)

  onMounted(() => {
    targetWidth.value = window.getComputedStyle(tableCol.value).getPropertyValue('--vi-table-td-width')
    if (collectColWidth) collectColWidth(props.value || id, targetWidth.value)
  })

  return {
    tableCol,
    targetWidth
  }
}
