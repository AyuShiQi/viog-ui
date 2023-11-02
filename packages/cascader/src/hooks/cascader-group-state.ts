// vue
import props from 'packages/button/src/props'
import { ref, reactive, computed, onUpdated } from 'vue'
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
    nextValue: null,
    targetValue: null
  })
  // inject
  // computed
  // 事件方法
  function handleItemPick (index: number) {
    choose.target = index < props.options.length ? props.options[index] : null
    if (choose.target) choose.nextValue = choose.target.value
  }
  // 方法
  // 普通function函数
  // provide
  // 生命周期
  onUpdated(() => {
    if (choose.targetValue !== props.nextValue) {
      choose.targetValue = props.nextValue
      choose.nextValue = null
      choose.target = null
    }
  })
  return {
    choose,
    handleItemPick
  }
}
