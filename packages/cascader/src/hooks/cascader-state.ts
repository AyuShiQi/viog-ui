// vue
import { reactive, onUpdated, onMounted, ref, provide, computed } from 'vue'
// vue type
import type { SetupContext } from 'vue'
// 组件type
// 外部hooks
// 内部hooks
// 外部模块

export default function (props: any, ctx: SetupContext) {
  // 普通常量
  // DOM ref
  const cascader = ref()
  // ref
  // reactive
  /**
   * 选项信息
   */
  const choose = reactive({
    options: props.options,
    width: ['200px'],
    height: ['auto']
  })
  // inject
  // computed
  const pick = computed(() => props.modelValue)
  // 事件方法
  // 方法
  function changePick (step: number, value: string) {
    pick.value.length = step + 1
    pick.value[step] = value
    ctx.emit('pick', [...pick.value], step)
  }
  // 普通function函数
  function listenChooseChange () {
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
  provide('vi-cascader-change-pick', changePick)
  // 生命周期
  onMounted(() => {
    getWidthAndHeight()
  })
  onUpdated(() => {
    listenChooseChange()
  })
  return {
    cascader,
    pick,
    choose
  }
}
