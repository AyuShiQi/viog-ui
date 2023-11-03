// vue
import { reactive, computed, watch } from 'vue'
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
  const choose = reactive({
    target: null as any,
    // 上一阶级目标value
    prevValue: null,
    // 当前阶级目标value
    targetValue: null
  })
  // inject
  // computed
  const nextValue = computed(() => props.nextValue)
  watch(nextValue, listenPrevValueChange, { immediate: true })
  // 事件方法
  /**
   * 处理item改变
   * @param index 下标
   */
  function handleItemPick (index: number) {
    choose.target = index < props.options.length ? props.options[index] : null
    if (choose.target) choose.targetValue = choose.target.value
  }
  // 方法
  // 普通function函数
  /**
   * 监听上一阶级value改变
   */
  function listenPrevValueChange () {
    if (choose.prevValue !== nextValue.value) {
      if (choose.prevValue !== null) {
        choose.targetValue = null
        choose.target = null
      }
      choose.prevValue = nextValue.value
    }
  }
  // provide
  // 生命周期
  return {
    choose,
    handleItemPick
  }
}
