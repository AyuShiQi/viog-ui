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

import { formTargetStateReactive } from '@/hooks/form-target-state'

export default function (props: any, ctx: SetupContext) {
  const idDistributor = idCollectorState(0, 'vi-input-table')
  // 普通常量
  // DOM ref
  // ref
  const pickViewValue = ref()
  // reactive
  const value = computed(() => (props.modelValue || []) as any[])
  const colMap = reactive([]) as any[]
  const widthMap = reactive({}) as any
  const originPickValue = reactive(computed(() => props.pickValue).value)

  formTargetStateReactive(props.name, value)
  // inject
  // computed
  const multiValue = computed(() => {
    const res = []
    for (let i = 0; i < value.value.length; i++) {
      res.push(i)
    }
    return res
  })

  watch(pickViewValue, () => {
    originPickValue[0] = pickViewValue.value
    ctx.emit('pick', originPickValue[0], false)
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
    if (!value.value[i] && val) {
      // 判断是对象还是数组
      if (i > 0) {
        if (value.value[0] instanceof Array) {
          value.value[i] = []
        } else value.value[i] = {}
      } else {
        if (typeof val === 'number') {
          value.value[i] = []
        } else value.value[i] = {}
      }
    }
    // if (val) {
    value.value[i][j] = val
    ctx.emit('input', val, i, j)
    // }
  }

  function collectCol (id: number, value: any) {
    colMap[id] = value
  }

  function collectColWidth (value: any, width: string) {
    widthMap[value] = width
  }

  function handleCheckBoxChange (value: any, res: boolean) {
    ctx.emit('pick', value, false)
  }
  // provide
  provide('vi-input-table-id-getter', idGetter())
  provide('vi-input-table-editor', editValue)
  provide('vi-collect-col', collectCol)
  provide('vi-collect-col-width', collectColWidth)
  // 生命周期
  return {
    pickViewValue,
    value,
    colMap,
    widthMap,
    multiValue,
    originPickValue,
    handleCheckBoxChange,
    ...idDistributor
  }
}
