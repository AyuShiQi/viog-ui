// vue
import { reactive, computed, watch, inject } from 'vue'
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
    target: undefined as any,
    // 上一阶级目标value
    prevValue: undefined,
    // 当前阶级目标value
    targetValue: undefined
  })
  // inject
  const changePick = inject('vi-cascader-change-pick') as (step: number, value: any) => void
  // computed
  const nowWidth = computed(() => {
    const len = props.width.length
    return props.width[props.step % len]
  })
  const nowHeight = computed(() => {
    const len = props.height.length
    return props.height[props.step % len]
  })
  // 当前阶级目标value
  const targetValue = computed(() => props.pick[props.step])
  // 上一阶级目标value
  const prevValue = computed(() => props.nextValue)
  watch(prevValue, listenPrevValueChange, { immediate: true })
  watch(targetValue, listenTargetValueChange)
  // 事件方法
  /**
   * 处理item改变
   * @param index 下标
   */
  function handleItemPick (index: number) {
    choose.target = index < props.options.length ? props.options[index] : null
    if (choose.target) {
      changePick(props.step, choose.target.value)
    }
  }
  // 方法
  // 普通function函数
  /**
   * 监听当前阶级value改变
   */
  function listenTargetValueChange () {
    console.log(props.step, targetValue.value)
    // 如果这一段的targetValue不见了，那么target置为undefined
    if (targetValue.value === undefined) {
      choose.targetValue = undefined
      choose.target = undefined
    }
  }
  /**
   * 监听上一阶级value改变
   */
  function listenPrevValueChange () {
    console.log(props.step, prevValue.value, choose.prevValue)
    if (choose.prevValue !== prevValue.value) {
      if (choose.prevValue !== undefined) {
        // 这个地方要改
        choose.targetValue = undefined
        choose.target = undefined
      }
      choose.prevValue = prevValue.value
    }
  }
  // provide
  // 生命周期
  return {
    choose,
    nowWidth,
    nowHeight,
    targetValue,
    handleItemPick
  }
}
