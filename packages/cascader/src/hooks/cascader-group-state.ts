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
    // 上一阶级目标value(pre value)
    prevValue: undefined
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
  const nowMinWidth = computed(() => {
    const len = props.minWidth.length
    return props.minWidth[props.step % len]
  })
  const nowMinHeight = computed(() => {
    const len = props.minHeight.length
    return props.minHeight[props.step % len]
  })
  const nowMaxWidth = computed(() => {
    const len = props.maxWidth.length
    return props.maxWidth[props.step % len]
  })
  const nowMaxHeight = computed(() => {
    const len = props.maxHeight.length
    return props.maxHeight[props.step % len]
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
    changeTarget(index < props.options.length ? props.options[index] : undefined)
  }
  // 方法
  // 普通function函数
  /**
   * 监听当前阶级value改变
   */
  function listenTargetValueChange () {
    // console.log(props.step, targetValue.value)
    // 如果这一段的targetValue不见了，那么target置为undefined
    if (targetValue.value === undefined) {
      choose.target = undefined
    } else {
      // 说明有新的值，寻找值
      changeTarget(findTargetWithValue(targetValue.value))
    }
  }
  /**
   * 监听上一阶级value改变
   */
  function listenPrevValueChange () {
    // console.log(props.step, prevValue.value, choose.prevValue)
    if (choose.prevValue !== prevValue.value) {
      if (choose.prevValue !== undefined) {
        choose.target = undefined
      }
      choose.prevValue = prevValue.value
    }
  }

  function findTargetWithValue (val: any) {
    for (const option of props.options) {
      if (option.value === val) return option
    }
    return undefined
  }

  function changeTarget (newTarget: any) {
    // if (choose.target === newTarget) return
    choose.target = newTarget
    changePick(props.step, choose.target.value)
  }
  // provide
  // 生命周期
  return {
    choose,
    nowWidth,
    nowHeight,
    nowMinWidth,
    nowMinHeight,
    nowMaxWidth,
    nowMaxHeight,
    targetValue,
    handleItemPick
  }
}
