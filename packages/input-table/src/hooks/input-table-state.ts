// vue
import { ref, reactive, provide, watch, computed } from 'vue'
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
  const pickViewValue = ref()
  // reactive
  const value = reactive(props.modelValue || []) as any[]
  const colMap = reactive([]) as any[]
  const originPickValue = reactive(props.pickValue)
  // inject
  // computed
  const multiValue = computed(() => {
    const res = []
    for (let i = 0; i < value.length; i++) {
      res.push(i)
    }
    return res
  })

  watch(pickViewValue, () => {
    originPickValue[0] = pickViewValue.value
  })
  // 事件方法
  // 方法
  // 普通function函数
  /**
   * 编辑内容
   * @param val 值
   * @param i 横轴
   * @param j 纵轴
   */
  function editValue (val: any, i: number, j: number) {
    // console.log(i, j, value, value[i])
    if (!value[i] && val) {
      // 判断是对象还是数组
      if (i > 0) {
        if (value[0] instanceof Array) {
          value[i] = []
        } else value[i] = {}
      } else {
        if (typeof val === 'number') {
          value[i] = []
        } else value[i] = {}
      }
    }
    if (val) value[i][j] = val
  }

  function collectCol (id: number, value: any) {
    colMap[id] = value
  }
  // provide
  provide('vi-input-table-id-getter', idGetter())
  provide('vi-input-table-editor', editValue)
  provide('vi-collect-col', collectCol)
  // 生命周期
  return {
    pickViewValue,
    value,
    colMap,
    multiValue,
    originPickValue,
    ...idDistributor
  }
}
