// vue
import { reactive, onUpdated, onMounted, ref } from 'vue'
// vue type
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any) {
  // 普通常量
  // DOM ref
  const cascader = ref()
  // ref
  // reactive
  /**
   * 选项信息
   */
  const choose = reactive({
    pick: props.modelValue ?? [],
    options: props.options,
    width: ['200px'],
    height: ['auto']
  })
  // inject
  // computed
  // 事件方法
  // 方法
  // 普通function函数
  function listenChooseChange () {
    if (props.modelValue !== undefined) choose.pick = props.modelValue
    if (props.options !== undefined) choose.options = props.options
  }

  function getWidthAndHeight () {
    const style = getComputedStyle(cascader.value)
    const width = style.getPropertyValue('--vi-cascader-width')
    const height = style.getPropertyValue('--vi-cascader-height')
    const widthArr = width.trim().split(' ')
    const heightArr = height.trim().split(' ')
    choose.width = widthArr.length > 0 ? widthArr : ['200px']
    choose.height = heightArr.length > 0 ? heightArr : ['auto']
  }
  // provide
  // 生命周期
  onMounted(() => {
    getWidthAndHeight()
  })
  onUpdated(() => {
    listenChooseChange()
  })
  return {
    cascader,
    choose
  }
}
