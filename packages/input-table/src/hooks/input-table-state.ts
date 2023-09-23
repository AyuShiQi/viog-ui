// vue
import { reactive, computed, watch, provide, onMounted } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块
import idGetter from '../../../utils/communication/IdDistributor'
import idCollectorState from '@/hooks/id-collector-state'

export default function (props: any, ctx: SetupContext) {
  const idDistributor = idCollectorState(0, 'vi-input-table')
  // 普通常量
  // DOM ref
  // ref
  const value = reactive(props.modelValue || []) as any[]
  const viewValue = reactive([]) as any[]
  // reactive
  // inject
  // computed
  watch(value, () => {
    changeViewValue()
  })
  // 事件方法
  // 方法
  // 普通function函数
  function changeViewValue () {
    for (let i = 0; i < value.length; i++) {
      if (!viewValue[i]) viewValue.push([])
      const now = value[i]
      viewValue[i].length = Math.min(idDistributor.maxId.value + 1, now.length)
      for (let j = 0; j < now.length && j <= idDistributor.maxId.value; j++) {
        viewValue[i][j] = now[j]
      }
    }
    viewValue.length = value.length
  }

  function editValue (val: any, i: number, j: number) {
    value[i][j] = val
  }
  // provide
  provide('vi-input-table-id-getter', idGetter())
  provide('vi-input-table-editor', editValue)
  // 生命周期
  onMounted(() => {
    changeViewValue()
  })
  return {
    value,
    viewValue,
    ...idDistributor
  }
}
